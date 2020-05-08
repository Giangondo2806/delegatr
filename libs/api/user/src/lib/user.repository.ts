import { BaseRepository, ModelType } from '@delegatr/api/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectModel(User.modelName) private readonly userModel: ModelType<User>
  ) {
    super(userModel);
  }

  async findByEmail(email: string) {
    try {
      return await this.findOne().where('email').equals(email).exec();
    } catch (e) {
      UserRepository.throwMongoError(e);
    }
  }
}
