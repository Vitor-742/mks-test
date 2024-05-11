import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,

  ) {}
  
  async create(createUserDto: CreateUserDto) {
    const new_user = new User(createUserDto);

    await this.entityManager.save(new_user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(email: string): Promise<User | null> {
    return await this.usersRepository.findOneBy({ email });
  }
}
