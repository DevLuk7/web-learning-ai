import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { LessonEntity } from './lesson.entity';

@Schema()
export class CourseEntity extends Document {
  @Prop({ unique: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'LessonEntity' }] })
  posts: LessonEntity[];
}

export const CourseSchema = SchemaFactory.createForClass(CourseEntity);
