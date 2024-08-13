import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCourseQuery } from './get-course.query';
import { Course } from 'src/courses/domain/course';
import { CourseRepository } from '../ports/courses.repository';

@QueryHandler(GetCourseQuery)
export class GetCoursesQueryHandler
  implements IQueryHandler<GetCourseQuery, Course[]>
{
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(): Promise<Course[]> {
    return this.courseRepository.findAll();
  }
}
