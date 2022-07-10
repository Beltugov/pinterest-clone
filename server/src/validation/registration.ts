import { body } from "express-validator";
import { UserEntity } from "../entity/userEntity";

export const regValidation = [
  body("email", "Введите E-Mail")
    .isEmail()
    .withMessage("Недопустимый E-Mail")
    .isLength({
      min: 6,
    })
    .withMessage("Количество символов E-Mail не может быть меньше 6")
    .isLength({ max: 40 })
    .withMessage("Количество символов E-Mail не может быть больше 40")
    .custom((value: string) => {
      return UserEntity.findOneBy({ email: value }).then((email) => {
        if (email) {
          return Promise.reject("E-mail уже используется");
        }
      });
    }),

  body("password", "Введите пароль")
    .isString()
    .isLength({
      min: 6,
    })
    .withMessage("Количество символов пароля не может быть меньше 6")
    .isLength({ max: 20 })
    .withMessage("Количество символов пароля не может быть больше 20"),
];
