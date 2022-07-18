import { PinEntity } from "../entity/pinEntity";
import { CommentEntity } from "../entity/commentEntity";
import { UserEntity } from "../entity/userEntity";

export class CommentService {
  create = async (pinId, userId, text) => {
    try {
      const pin = await PinEntity.findOneBy({ id: pinId });
      const user = await UserEntity.findOneBy({ id: userId });
      const comment = await CommentEntity.create({
        text,
        pin,
        user,
      }).save();
      return {
        status: 200,
        comment: comment.text,
      };
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  };

  getAll = async (pinId, limited: number, offset: number) => {
    try {
      return await PinEntity.find({
        where: {
          id: pinId,
        },
        relations: ["comment"],
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

  remove = async (id: number) => {
    try {
      const comment = await CommentEntity.findOneBy({ id: id });
      await CommentEntity.remove(comment);
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
