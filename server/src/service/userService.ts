import { UserEntity } from "../entity/userEntity";
import { IUser } from "../types/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
};

export class UserService {

  registration = async ({
                          firstName,
                          secondName,
                          password,
                          email,
                          avatar,
                        }: IUser) => {
    try {
      const hashPassword = await bcrypt.hash(password, 3);
      const user = await UserEntity.create({
        firstName,
        secondName,
        password: hashPassword,
        email,
        avatar,
      }).save();
      return createToken(user);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  login = async ({id}: { id: number; email: string }) => {
    try {
      const user = await UserEntity.findOneBy({id: id});
      return createToken(user);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  auth = async ({id}: { id: number; email: string }) => {
    try {
      const user = await UserEntity.findOneBy({id: id});
      return createToken(user);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  change = async (update: IUser) => {
    try {
      const hashPassword = update.password
          ? await bcrypt.hash(update.password, 3)
          : null;

      const user = await UserEntity.findOneBy({id: update.id});
      await UserEntity.update(update.id, {
        firstName: update.firstName || user.firstName,
        secondName: update.secondName || user.secondName,
        email: update.email || user.email,
        password: hashPassword || user.password,
        avatar: update.avatar || user.avatar,
      });
      const userUpdate = await UserEntity.findOneBy({id: update.id});
      return createToken(userUpdate);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  remove = async ({id}) => {
    try {
      const user = await UserEntity.findOneBy({id: id});
      await UserEntity.remove(user);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };
}
