import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class WebPage extends Document {
  @Prop()
  url: string;

  @Prop()
  description: string;
}

export const WebPageSchema = SchemaFactory.createForClass(WebPage);
