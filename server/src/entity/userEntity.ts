import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { BoardEntity } from "./boardEntity";
import { CommentEntity } from "./commentEntity";
import { PinEntity } from "./pinEntity";

@Entity("user")
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  secondName: string;

  @Column()
  password: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  avatar: string;

  @OneToMany(() => PinEntity, (pin) => pin.user)
  @JoinColumn()
  pin: PinEntity[];

  @OneToMany(() => BoardEntity, (board) => board.user)
  @JoinColumn()
  board: BoardEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  @JoinColumn()
  comment: CommentEntity[];
}
