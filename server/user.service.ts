import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  findOne(where: any): Promise<UserEntity | undefined> {
    return this.userRepository.findOne(where);
  }

  public async findById(
    id: string,
    opts?: FindOneOptions<UserEntity>,
  ): Promise<UserEntity | null> {
    return await this.userRepository.findOneOrFail(id, opts);
  }

  public async findByEmail(userEmail: string): Promise<UserEntity | null> {
    return await this.userRepository.findOne({ email: userEmail });
  }

  // async create(
  //   userDto: Partial<any>,
  // ): Promise<any | undefined> {
  //   const { password, email, name } = userDto;
  //
  //   const userInDb = await this.userRepository.findOne({
  //     where: { email },
  //   });
  //
  //   if (userInDb) {
  //     throw new HttpException(`UserEntity already exists`, HttpStatus.OK);
  //   }
  //
  //   const user: UserEntity = await this.userRepository.create({
  //     password,
  //     email,
  //     name,
  //   });
  //   await this.userRepository.save(user);
  //   return user;
  // }
}
