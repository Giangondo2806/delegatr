import { Injectable } from '@nestjs/common';
import { AutoMapper, InjectMapper } from 'nestjsx-automapper';
import { BaseService } from '../../../common/src/lib/base.service';
import { User } from './user.model';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    private readonly userRepository: UserRepository,
    @InjectMapper() private readonly mapper: AutoMapper
  ) {
    super(userRepository);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findByEmail(email);
  }
}