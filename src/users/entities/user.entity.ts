// import * as bcrypt from "bcrypt";
import { Entity, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";

import { BasicEntity } from "src/base.entity";
import { Room } from "src/rooms/entities/room.entity";

@Entity()
export class User extends BasicEntity {
  @Column({ length: 50 })
  name: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  //   async setPassword(password: string) {
  //     this.password = await bcrypt.hash(password, saltOrRounds);
  //   }

  @OneToMany((type) => Room, (room) => room.owner)
  rooms: Room[];
}
