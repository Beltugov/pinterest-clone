import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { PinEntity } from "./pinEntity";
import { UserEntity } from "./userEntity";

@Entity("board")
export class BoardEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => UserEntity, (user) => user.board)
  user: UserEntity;

  @ManyToMany(() => PinEntity, (pin) => pin.board)
  @JoinTable({
    name: "board_pin",
    joinColumn: {
      name: "board",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "pin",
      referencedColumnName: "id",
    },
  })
  pin: PinEntity[];
}
