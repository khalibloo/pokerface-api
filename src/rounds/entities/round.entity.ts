import { Entity, Column, ManyToOne, OneToMany } from "typeorm";

import { BasicEntity } from "src/base.entity";
import { Room } from "src/rooms/entities/room.entity";
import { Vote } from "src/votes/entities/vote.entity";

@Entity()
export class Round extends BasicEntity {
  @Column({ default: true })
  isActive: boolean;

  @ManyToOne((type) => Room, (room) => room.rounds)
  room: Room;

  @OneToMany((type) => Vote, (vote) => vote.round)
  votes: Vote[];
}
