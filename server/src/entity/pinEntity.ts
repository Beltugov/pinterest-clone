import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { BoardEntity } from "./boardEntity";
import { CommentEntity } from "./commentEntity";
import { UserEntity } from "./userEntity";

@Entity("pin")
export class PinEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  img: string;

  @Column()
  title: string;

  @Column()
  description: string | null;

  @ManyToOne(() => UserEntity, (user) => user.pin)
  user: UserEntity;

  @ManyToOne(() => CommentEntity, (comment) => comment.pin)
  @JoinColumn()
  comment: CommentEntity[];

  @ManyToMany(() => BoardEntity, (board) => board.pin)
  board: BoardEntity[];
}
