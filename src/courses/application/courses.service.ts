import { Injectable } from '@nestjs/common';
import { CreateCourseCommand } from './commands/create-course.command';

@Injectable()
export class CoursesService {
  create(createCourseCommand: CreateCourseCommand) {
    return 'This action adds a new course';
  }

  findAll() {
    return `This action returns all courses`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} course`;
  // }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return `This action updates a #${id} course`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} course`;
  // }
}
