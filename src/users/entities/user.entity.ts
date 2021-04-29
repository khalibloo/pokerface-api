// import * as bcrypt from "bcrypt";
import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";

import { BasicEntity } from "src/base.entity";
import { Room } from "src/rooms/entities/room.entity";
import { OmitType } from "@nestjs/swagger";

@Entity()
export class User extends OmitType(BasicEntity, ["id"]) {
  // id comes from auth0
  @PrimaryColumn()
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany((type) => Room, (room) => room.owner)
  rooms: Room[];
}
