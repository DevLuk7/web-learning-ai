import { DynamicModule, Module, Type } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from '../presenters/http/courses.controller';
import { CourseFactory } from '../domain/factories/course.factory';
import { CreateCourseCommandHandler } from './commands/create-course.command-handler';
import { GetCoursesQueryHandler } from './queries/get-course.query-handler';
import { CourseCreatedEventHandler } from './event-handlers/course-created.event-handler';

@Module({
  controllers: [CoursesController],
  providers: [
    CoursesService,
    CourseFactory,
    CreateCourseCommandHandler,
    GetCoursesQueryHandler,
    CourseCreatedEventHandler,
  ],
})
export class CoursesModule {
  static withInfrastucture(infrastructureModule: Type | DynamicModule) {
    return {
      module: CoursesModule,
      imports: [infrastructureModule],
    };
  }
}
