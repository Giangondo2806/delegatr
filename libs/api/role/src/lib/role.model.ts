import { BaseModel, useMongoosePlugin } from '@delegatr/api/common';
import { Permission } from '@delegatr/api/permission';
import { prop } from '@typegoose/typegoose';
import { AutoMap } from 'nestjsx-automapper';

@useMongoosePlugin()
export class Role extends BaseModel {
  @prop({ default: false })
  @AutoMap()
  isGlobal: boolean;
  @prop({ default: '', required: false })
  @AutoMap()
  parentId?: string;
  @prop({
    required: true,
    unique: true,
    text: true,
    maxlength: 255,
    minlength: 4,
  })
  @AutoMap()
  name: string;
  @prop({
    unique: true,
    text: true,
    minlength: 4,
  })
  @AutoMap()
  slug: string;
  @prop({ required: true, maxlength: 255, minlength: 6 })
  @AutoMap()
  note: string;
  @prop({ type: () => Permission, default: [] })
  @AutoMap(() => Permission)
  permissions: Permission[];
}
