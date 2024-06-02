import {UserEntity} from "../entity/userEntity";
import {IUser} from "../types/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs";

const uuid = require("uuid");

const createToken = (user) => {
	return jwt.sign({user}, process.env.SECRET_KEY, {
		expiresIn: "7d",
	});
};

export class UserService {
	registration = async ({nickname, password, email}: IUser) => {
		try {
			const hashPassword = await bcrypt.hash(password, 3);
			const user = await UserEntity.create({
				nickname,
				password: hashPassword,
				email,
			}).save();

			return createToken(user);
		} catch (e) {
			return {
				status: 500,
				error: e,
			};
		}
	};

	login = async ({email}: { email: string }) => {
		try {
			const user = await UserEntity.findOneBy({email: email});
			return {
				userToken: createToken(user),
			};
		} catch (e) {
			return {
				status: 500,
				error: e,
			};
		}
	};

	auth = async ({id}: { id: number }) => {
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
			const fileName = uuid.v4() + ".jpg";
			const user = await UserEntity.findOneBy({id: update.id});
			if (update.avatar) {
				await update.avatar.mv(
					path.resolve(__dirname, "..", "img/avatar", fileName)
				);
				await fs.unlink(
					path.resolve(__dirname, "..", "img", user.avatar),
					() => {
						return;
					}
				);
			}
			await UserEntity.update(update.id, {
				nickname: update.nickname || user.nickname,
				email: update.email || user.email,
				password: hashPassword || user.password,
				avatar: update.avatar ? fileName : user.avatar,
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
			if (user) {
				await UserEntity.remove(user);
				await fs.unlink(
					path.resolve(__dirname, "..", "img", user.avatar),
					() => {
						return;
					}
				);
				return {status: 200};
			}
			return {status: 404, message: "Not found"};
		} catch (e) {
			return {
				status: 500,
				error: e,
			};
		}
	};
}
