import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from '../presenters/http/courses.controller';
import { CourseFactory } from '../domain/factories/course.factory';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, CourseFactory],
})
export class CoursesModule {}
