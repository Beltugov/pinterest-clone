import {body} from "express-validator";
import {UserEntity} from "../entity/userEntity";
import bcrypt from "bcrypt";

export const loginValidation = [
	body("email", "Введите E-Mail")
		.isEmail()
		.withMessage("Недопустимый E-Mail")
		.isLength({
			min: 6,
		})
		.withMessage("Количество символов не может быть меньше 6")
		.isLength({max: 40})
		.withMessage("Количество символов не может быть больше 40")
		.custom(async (value: string, {req}) => {
			const user = await UserEntity.findOneBy({email: req.body.email});
			if (!user) {
				return Promise.reject("Пользователь с таким E-mail не найден");
			}
		}),

	body("password", "Введите пароль")
		.isString()
		.isLength({
			min: 6,
		})
		.withMessage("Количество символов пароля не может быть меньше 6")
		.isLength({max: 20})
		.withMessage("Количество символов пароля не может быть больше 20")
		.custom(async (value: string, {req}) => {
			const user = await UserEntity.findOneBy({email: req.body.email});
			if (!user) {
				return
			}
			const hashPassword = await bcrypt.compare(value, user.password);
			if (!hashPassword) {
				return Promise.reject("Неверный пароль");
			}
		}),
];
