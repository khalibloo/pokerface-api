import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import * as bcrypt from "bcrypt";

import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { Room } from "./entities/room.entity";

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
  ) {}

  create({ password, ...data }: CreateRoomDto) {
    const hashedPwd = bcrypt.hashSync(
      password,
      parseInt(process.env.BCRYPT_ROUNDS, 10),
    );
    return this.roomsRepository.create({ ...data, password: hashedPwd });
  }

  update(id: number, data: UpdateRoomDto): Promise<UpdateResult> {
    return this.roomsRepository.update(id, data);
  }

  findAll(): Promise<Room[]> {
    return this.roomsRepository.find();
  }

  findOne(id: number): Promise<Room> {
    return this.roomsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.roomsRepository.delete(id);
  }
}
