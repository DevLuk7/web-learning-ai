import { Module } from '@nestjs/common';
import { OrmCreateCourseRepository } from './repositories/create-course.repository';
import { CreateCourseRepository } from 'src/courses/application/ports/create-course.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseEntity, CourseSchema } from './entities/course.entity';
import { LessonEntity, LessonSchema } from './entities/lesson.entity';
import { FindCourseRepository } from 'src/courses/application/ports/find-course.repository';
import { OrmFindCourseRepository } from './repositories/find-course.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CourseEntity.name, schema: CourseSchema },
      { name: LessonEntity.name, schema: LessonSchema },
    ]),
  ],
  providers: [
    {
      provide: CreateCourseRepository,
      useClass: OrmCreateCourseRepository,
    },
    {
      provide: FindCourseRepository,
      useClass: OrmFindCourseRepository,
    },
  ],
  exports: [CreateCourseRepository, FindCourseRepository],
})
export class OrmCoursePersistenceModule {}
