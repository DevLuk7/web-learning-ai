import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CourseCreatedEvent } from 'src/courses/domain/events/course-created.event';

@EventsHandler(CourseCreatedEvent)
export class CourseCreatedEventHandler
  implements IEventHandler<CourseCreatedEvent>
{
  private readonly logger = new Logger(CourseCreatedEventHandler.name);

  handle(event: CourseCreatedEvent) {
    this.logger.log(`Course created event: ${JSON.stringify(event)}`);
  }
}
