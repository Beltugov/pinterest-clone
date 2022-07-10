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
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  text: string;

  @ManyToOne(() => UserEntity, (user) => user.comment)
  user: UserEntity;

  @ManyToOne(() => PinEntity, (pin) => pin.comment)
  pin: PinEntity;
}
