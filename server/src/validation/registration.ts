import { body } from "express-validator";
import { UserEntity } from "../entity/userEntity";

export const regValidation = [
  body("firstName")
    .isString()
    .isLength({ max: 40 })
    .withMessage("Количество символов имени не может быть больше 40"),

  body("secondName")
    .isString()
    .isLength({ max: 40 })
    .withMessage("Количество символов фамилии не может быть больше 40"),

  body("email")
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

  body("password")
    .isString()
    .isLength({
      min: 6,
    })
    .withMessage("Количество символов пароля не может быть меньше 6")
    .isLength({ max: 20 })
    .withMessage("Количество символов пароля не может быть больше 20"),
];
