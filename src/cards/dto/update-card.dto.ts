import { OmitType, PartialType } from "@nestjs/swagger";
import { CreateCardDto } from "./create-card.dto";

export class UpdateCardDto extends OmitType(PartialType(CreateCardDto), [
  "room",
]) {}
