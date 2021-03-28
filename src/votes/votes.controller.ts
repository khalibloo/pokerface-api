import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { VotesService } from "./votes.service";
import { CreateVoteDto } from "./dto/create-vote.dto";
import { UpdateVoteDto } from "./dto/update-vote.dto";

@ApiTags("Votes")
@Controller("votes")
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Post()
  create(@Body() createVoteDto: CreateVoteDto) {
    return this.votesService.create(createVoteDto);
  }

  @Get()
  findAll() {
    return this.votesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.votesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateVoteDto: UpdateVoteDto) {
    return this.votesService.update(+id, updateVoteDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.votesService.remove(+id);
  }
}
