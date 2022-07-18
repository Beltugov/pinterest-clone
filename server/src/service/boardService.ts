import { BoardEntity } from "../entity/boardEntity";
import { UserEntity } from "../entity/userEntity";
import { PinEntity } from "../entity/pinEntity";

export class BoardService {
  create = async (title: string, userId: number) => {
    try {
      const user = await UserEntity.findOneBy({ id: userId });
      const board = await BoardEntity.create({ title, user }).save();
      console.log(board);
      return {
        status: 200,
        board: [board.id, board.title],
      };
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  addPin = async (id: number, pinId: number) => {
    try {
      const board = await BoardEntity.findOne({
        where: { id },
        relations: {
          pin: true,
        },
      });
      const pin = await PinEntity.findOneBy({ id: pinId });
      board.pin.push(pin);
      await BoardEntity.save(board);
      return await BoardEntity.findOne({
        where: { id: id },
        relations: ["pin"],
      });
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  removePin = async (id: number, pinId) => {
    try {
      const board = await BoardEntity.findOne({
        where: { id: id },
        relations: ["pin"],
      });
      board.pin = board.pin.filter((pin) => pin.id !== pinId);
      await BoardEntity.save(board);
      return await BoardEntity.findOne({
        where: { id: id },
        relations: ["pin"],
      });
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  getAll = async (userId, limited: number, offset: number) => {
    try {
      return await BoardEntity.find({
        where: {
          user: userId,
        },
        relations: ["pin"],
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
      return await BoardEntity.findOne({
        where: { id: id },
        relations: ["pin"],
      });
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  change = async (id: number, title: string) => {
    try {
      await BoardEntity.update(id, {
        title,
      });
      return await BoardEntity.findOneBy({ id: id });
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  remove = async (id: number) => {
    try {
      const board = await BoardEntity.findOneBy({ id: id });
      await BoardEntity.remove(board);
      return {
        status: 200,
      };
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };
}
