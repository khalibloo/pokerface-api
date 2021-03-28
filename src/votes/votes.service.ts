import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateVoteDto } from "./dto/create-vote.dto";
import { UpdateVoteDto } from "./dto/update-vote.dto";
import { Vote } from "./entities/vote.entity";

@Injectable()
export class VotesService {
  constructor(
    @InjectRepository(Vote)
    private votesRepository: Repository<Vote>,
  ) {}

  create(data: CreateVoteDto) {
    return this.votesRepository.create(data as any);
  }

  update(id: number, data: UpdateVoteDto) {
    return this.votesRepository.update(id, data as any);
  }

  findAll(): Promise<Vote[]> {
    return this.votesRepository.find();
  }

  findOne(id: number): Promise<Vote> {
    return this.votesRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.votesRepository.delete(id);
  }
}
