import { Injectable } from '@nestjs/common';
import { CreateCourseCommand } from './commands/create-course.command';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetCourseQuery } from './queries/get-course.query';

@Injectable()
export class CoursesService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  create(createCourseCommand: CreateCourseCommand) {
    return this.commandBus.execute(createCourseCommand);
  }

  findAll() {
    return this.queryBus.execute(new GetCourseQuery());
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
