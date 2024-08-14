import { Injectable } from '@nestjs/common';
import { CourseEntity } from '../entities/course.entity';
import { Course } from 'src/courses/domain/course';
import { CourseMapper } from '../mappers/course.mapper';
import { FindCourseRepository } from 'src/courses/application/ports/find-course.repository';

@Injectable()
export class InMemoryFindCourseRepository implements FindCourseRepository {
  private readonly courses = new Map<string, CourseEntity>();

  async findAll(): Promise<Course[]> {
    const entities = Array.from(this.courses.values());
    return entities.map((item) => CourseMapper.toDomain(item));
  }
}
