import { Module } from '@nestjs/common';
import { OrmCourseRepository } from './repositories/course.repository';
import { CourseRepository } from 'src/courses/application/ports/courses.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Course } from 'src/courses/domain/course';
import { CourseSchema } from './entities/course.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
  ],
  providers: [
    {
      provide: CourseRepository,
      useClass: OrmCourseRepository,
    },
  ],
  exports: [CourseRepository],
})
export class OrmCoursePersistenceModule {}
