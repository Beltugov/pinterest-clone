import { UserEntity } from "../entity/userEntity";
import { PinEntity } from "../entity/pinEntity";
import path from "path";
import * as fs from "fs";

const uuid = require("uuid");

export class PinService {
  create = async (
    title: string,
    userId: number,
    showTitle: boolean,
    description: string,
    img
  ) => {
    try {
      const fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "img", fileName));
      const user = await UserEntity.findOneBy({ id: userId });
      const createdPin = await PinEntity.create({
        title,
        user,
        show_title: showTitle,
        description,
        img: fileName,
      }).save();
      return {
        status: 200,
        pinInfo: {
          id: createdPin.id,
          title: createdPin.title,
          description: createdPin.description,
          img: createdPin.img,
          showTitle: createdPin.show_title,
        },
      };
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  getAll = async (userId, limited: number, offset: number) => {
    try {
      return await PinEntity.find({
        take: limited,
        skip: offset,
      });
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  getOne = async (id: number) => {
    try {
      return await PinEntity.findOneBy({ id: id });
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  change = async (
    id: number,
    title: string,
    description: string,
    showTitle
  ) => {
    try {
      await PinEntity.update(id, {
        title,
        description,
        show_title: showTitle,
      });
      return await PinEntity.findOneBy({ id: id });
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  remove = async (id: number) => {
    try {
      const pin = await PinEntity.findOneBy({ id: id });
      if (pin) {
        await PinEntity.remove(pin);
        await fs.unlink(path.resolve(__dirname, "..", "img", pin.img), () => {
          return;
        });
        return { status: 200 };
      }
      return { status: 404, message: "Not found" };
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };
}
