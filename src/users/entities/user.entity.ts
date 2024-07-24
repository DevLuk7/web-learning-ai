import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../enums/role.enum';
import {
  Permission,
  PermissionType,
} from 'src/iam/authorization/permission.type';

@Schema()
export class User extends Document {
  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ enum: Role, default: Role.Regular })
  role: Role;

  @Prop({ enum: Permission, default: [], type: Array })
  permissions: PermissionType[];
}

export const UserSchema = SchemaFactory.createForClass(User);
