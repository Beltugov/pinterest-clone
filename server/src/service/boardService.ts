import { BoardEntity } from "../entity/boardEntity";
import { UserEntity } from "../entity/userEntity";
import { PinEntity } from "../entity/pinEntity";

export class BoardService {
  create = async (title: string, userId: number) => {
    const user = await UserEntity.findOneBy({ id: userId });
    return await BoardEntity.create({ title, user }).save();
  };

  addPin = async (id: number, pinId: number) => {
    const board = await BoardEntity.findOne({
      where: { id },
      relations: {
        pin: true,
      },
    });
    const pin = await PinEntity.findOneBy({ id: pinId });
    board.pin.push(pin);
    await BoardEntity.save(board);
    return await BoardEntity.findOne({ where: { id: id }, relations: ["pin"] });
  };

  removePin = async (id: number, pinId) => {
    const board = await BoardEntity.findOne({
      where: { id: id },
      relations: ["pin"],
    });
    board.pin = board.pin.filter((pin) => pin.id !== pinId);
    await BoardEntity.save(board);
    return await BoardEntity.findOne({ where: { id: id }, relations: ["pin"] });
  };

  getAll = async (userId, limited: number, offset: number) => {
    return await BoardEntity.find({
      where: {
        user: userId,
      },
      relations: ["pin"],
      take: limited,
      skip: offset,
    });
  };

  getOne = async (id: number) => {
    return await BoardEntity.findOne({ where: { id: id }, relations: ["pin"] });
  };

  change = async (id: number, title: string) => {
    await BoardEntity.update(id, {
      title,
    });
    return await BoardEntity.findOneBy({ id: id });
  };

  remove = async (id: number) => {
    const board = await BoardEntity.findOneBy({ id: id });
    await BoardEntity.remove(board);
  };
}
