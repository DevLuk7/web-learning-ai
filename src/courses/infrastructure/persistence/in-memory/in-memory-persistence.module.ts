import { Module } from '@nestjs/common';
import { CourseRepository } from 'src/courses/application/ports/courses.repository';
import { InMemoryCourseRepository } from './repositories/course.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: CourseRepository,
      useClass: InMemoryCourseRepository,
    },
  ],
  exports: [CourseRepository],
})
export class InMemoryCoursePersistenceModule {}
