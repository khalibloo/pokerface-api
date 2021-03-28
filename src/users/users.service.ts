import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import * as bcrypt from "bcrypt";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create({ password, ...data }: CreateUserDto): User {
    // return User.create(data); // active record pattern
    const hashedPwd = bcrypt.hashSync(
      password,
      parseInt(process.env.BCRYPT_ROUNDS, 10),
    );
    return this.usersRepository.create({ ...data, password: hashedPwd });
  }

  update(id: number, data: UpdateUserDto): Promise<UpdateResult> {
    // return User.update(criteria, data); // active record pattern
    return this.usersRepository.update(id, data);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
