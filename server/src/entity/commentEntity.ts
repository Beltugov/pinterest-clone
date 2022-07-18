import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { PinEntity } from "./pinEntity";
import { UserEntity } from "./userEntity";

@Entity("comment")
export class CommentEntity extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => UserEntity, (user) => user.comment, {
    onDelete: "CASCADE",
  })
  user: UserEntity;

  @ManyToOne(() => PinEntity, (pin) => pin.comment, {
    onDelete: "CASCADE",
  })
  pin: PinEntity;
}
