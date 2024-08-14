import { Module } from '@nestjs/common';
import { CreateCourseRepository } from 'src/courses/application/ports/create-course.repository';
import { InMemoryCreateCourseRepository } from './repositories/create-course.repository';
import { FindCourseRepository } from 'src/courses/application/ports/find-course.repository';
import { InMemoryFindCourseRepository } from './repositories/find-course.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: CreateCourseRepository,
      useClass: InMemoryCreateCourseRepository,
    },
    {
      provide: FindCourseRepository,
      useClass: InMemoryFindCourseRepository,
    },
  ],
  exports: [CreateCourseRepository, FindCourseRepository],
})
export class InMemoryCoursePersistenceModule {}
