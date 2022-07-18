import { body } from "express-validator";
import { UserEntity } from "../entity/userEntity";

export const updateValidation = [
  body("email")
    .if((value) => {
      return value;
    })
    .isEmail()
    .withMessage("Недопустимый E-Mail")
    .isLength({
      min: 6,
    })
    .withMessage("Количество символов E-Mail не может быть меньше 6")
    .isLength({ max: 40 })
    .withMessage("Количество символов E-Mail не может быть больше 40")
    .custom((value: string) => {
      return UserEntity.findOneBy({ email: value }).then(({ email }) => {
        if (email) {
          return Promise.reject("E-mail уже используется");
        }
      });
    }),

  body("password")
    .if((value) => {
      return value;
    })
    .isString()
    .isLength({
      min: 6,
    })
    .withMessage("Количество символов пароля не может быть меньше 6")
    .isLength({ max: 20 })
    .withMessage("Количество символов пароля не может быть больше 20"),
];
