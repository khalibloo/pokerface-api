import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";
import { Card } from "./entities/card.entity";

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardsRepository: Repository<Card>,
  ) {}

  create(data: CreateCardDto) {
    return this.cardsRepository.create(data as any);
  }

  update(id: number, data: UpdateCardDto) {
    return this.cardsRepository.update(id, data);
  }

  findAll(): Promise<Card[]> {
    return this.cardsRepository.find();
  }

  findOne(id: number): Promise<Card> {
    return this.cardsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cardsRepository.delete(id);
  }
}
