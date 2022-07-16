import { PinEntity } from "../entity/pinEntity";
import { CommentEntity } from "../entity/commentEntity";
import { UserEntity } from "../entity/userEntity";

export class CommentService {
  create = async (pinId, userId, text) => {
    const pin = await PinEntity.findOneBy({ id: pinId });
    const user = await UserEntity.findOneBy({ id: userId });
    return await CommentEntity.create({
      text,
      pin,
      user,
    }).save();
  };

  getAll = async (pinId, limited: number, offset: number) => {
    return await PinEntity.find({
      where: {
        id: pinId,
      },
      relations: ["comment"],
      take: limited,
      skip: offset,
    });
  };

  remove = async (id: number) => {
    const comment = await CommentEntity.findOneBy({ id: id });
    await CommentEntity.remove(comment);
  };
}
