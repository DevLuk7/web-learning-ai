import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCourseQuery } from './get-course.query';
import { Course } from 'src/courses/domain/course';
import { FindCourseRepository } from '../ports/find-course.repository';

@QueryHandler(GetCourseQuery)
export class GetCoursesQueryHandler
  implements IQueryHandler<GetCourseQuery, Course[]>
{
  constructor(private readonly findCourseRepository: FindCourseRepository) {}

  async execute(): Promise<Course[]> {
    return this.findCourseRepository.findAll();
  }
}
