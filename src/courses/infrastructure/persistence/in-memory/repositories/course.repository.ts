import { Injectable } from '@nestjs/common';
import { CourseRepository } from 'src/courses/application/ports/courses.repository';
import { CourseEntity } from '../entities/course.entity';
import { Course } from 'src/courses/domain/course';
import { CourseMapper } from '../mappers/course.mapper';

@Injectable()
export class InMemoryCourseRepository implements CourseRepository {
  private readonly courses = new Map<string, CourseEntity>();

  async findAll(): Promise<Course[]> {
    const entities = Array.from(this.courses.values());
    return entities.map((item) => CourseMapper.toDomain(item));
  }

  async save(course: Course): Promise<Course> {
    const persistenceModel = CourseMapper.toPersistence(course);
    this.courses.set(persistenceModel.id, persistenceModel);

    const newEntity = this.courses.get(persistenceModel.id);
    return CourseMapper.toDomain(newEntity);
  }
}
