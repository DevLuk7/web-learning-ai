import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCourseCommand } from './create-course.command';
import { Logger } from '@nestjs/common';
import { CourseRepository } from '../ports/courses.repository';
import { CourseFactory } from 'src/courses/domain/factories/course.factory';

@CommandHandler(CreateCourseCommand)
export class CreateCourseCommandHandler
  implements ICommandHandler<CreateCourseCommand>
{
  private readonly logger = new Logger(CreateCourseCommandHandler.name);

  constructor(
    private readonly courseRepository: CourseRepository,
    private readonly courseFactory: CourseFactory,
  ) {}

  async execute(command: CreateCourseCommand) {
    this.logger.debug(
      `Processing "CreateCourseCommand": ${JSON.stringify(command)}`,
    );
    const alarm = this.courseFactory.create(command.name);
    return this.courseRepository.save(alarm);
  }
}
