import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class ApiKey extends Document {
  @Prop({ unique: true })
  key: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  user: User;
}

export const ApiKeySchema = SchemaFactory.createForClass(ApiKey);
