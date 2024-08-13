import { Injectable } from '@nestjs/common';
import { CreateCourseCommand } from './commands/create-course.command';
import { CourseRepository } from './ports/courses.repository';
import { CourseFactory } from '../domain/factories/course.factory';

@Injectable()
export class CoursesService {
  constructor(
    private readonly courseRepository: CourseRepository,
    private readonly courseFactory: CourseFactory,
  ) {}

  create(createCourseCommand: CreateCourseCommand) {
    const course = this.courseFactory.create(createCourseCommand.name);
    return this.courseRepository.save(course);
  }

  findAll() {
    return this.courseRepository.findAll();
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
