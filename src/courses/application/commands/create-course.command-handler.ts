import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateCourseCommand } from './create-course.command';
import { Logger } from '@nestjs/common';
import { CourseRepository } from '../ports/courses.repository';
import { CourseFactory } from 'src/courses/domain/factories/course.factory';
import { CourseCreatedEvent } from 'src/courses/domain/events/course-created.event';

@CommandHandler(CreateCourseCommand)
export class CreateCourseCommandHandler
  implements ICommandHandler<CreateCourseCommand>
{
  private readonly logger = new Logger(CreateCourseCommandHandler.name);

  constructor(
    private readonly courseRepository: CourseRepository,
    private readonly courseFactory: CourseFactory,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateCourseCommand) {
    this.logger.debug(
      `Processing "CreateCourseCommand": ${JSON.stringify(command)}`,
    );
    const course = this.courseFactory.create(command.name);
    await this.courseRepository.save(course);

    this.eventBus.publish(new CourseCreatedEvent(course));

    return course;
  }
}
