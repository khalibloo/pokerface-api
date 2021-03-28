import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRoundDto } from "./dto/create-round.dto";
import { UpdateRoundDto } from "./dto/update-round.dto";
import { Round } from "./entities/round.entity";

@Injectable()
export class RoundsService {
  constructor(
    @InjectRepository(Round)
    private roundsRepository: Repository<Round>,
  ) {}

  create(data: CreateRoundDto) {
    return this.roundsRepository.create(data as any);
  }

  update(id: number, data: UpdateRoundDto) {
    return this.roundsRepository.update(id, data);
  }

  findAll(): Promise<Round[]> {
    return this.roundsRepository.find();
  }

  findOne(id: number): Promise<Round> {
    return this.roundsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.roundsRepository.delete(id);
  }
}
