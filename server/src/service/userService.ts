import { UserEntity } from "../entity/userEntity";
import { IUser } from "../types/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserService {
  registration = async ({
    firstName,
    secondName,
    password,
    email,
    avatar,
  }: IUser) => {
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await UserEntity.create({
      firstName,
      secondName,
      password: hashPassword,
      email,
      avatar,
    }).save();
    return jwt.sign({ id: user.id, email }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
  };

  login = ({ id, email }) => {
    return jwt.sign({ id, email }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
  };
}
