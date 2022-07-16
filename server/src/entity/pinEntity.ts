import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { BoardEntity } from "./boardEntity";
import { CommentEntity } from "./commentEntity";
import { UserEntity } from "./userEntity";

@Entity("pin")
export class PinEntity extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  img: string;

  @Column()
  title: string;

  @Column()
  description: string | null;

  @ManyToOne(() => UserEntity, (user) => user.pin, {
    onDelete: "CASCADE",
  })
  user: UserEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.pin)
  @JoinColumn()
  comment: CommentEntity[];

  @ManyToMany(() => BoardEntity, (board) => board.pin, {
    onDelete: "CASCADE",
  })
  board: BoardEntity[];
}
