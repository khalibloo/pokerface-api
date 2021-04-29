import { OmitType } from "@nestjs/swagger";
import { Room } from "../entities/room.entity";

export class CreateRoomDto extends OmitType(Room, [
  "owner",
  "cards",
  "rounds",
  "isPublished",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
]) {
  password: string;
}
