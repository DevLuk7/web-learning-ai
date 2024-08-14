import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CourseEntity } from './course.entity';

@Schema()
export class LessonEntity extends Document {
  @Prop({ unique: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'CourseEntity' })
  author: CourseEntity;
}

export const LessonSchema = SchemaFactory.createForClass(LessonEntity);
