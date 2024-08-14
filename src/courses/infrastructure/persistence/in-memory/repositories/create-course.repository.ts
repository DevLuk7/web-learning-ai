import { Injectable } from '@nestjs/common';
import { CreateCourseRepository } from 'src/courses/application/ports/create-course.repository';
import { CourseEntity } from '../entities/course.entity';
import { Course } from 'src/courses/domain/course';
import { CourseMapper } from '../mappers/course.mapper';

@Injectable()
export class InMemoryCreateCourseRepository implements CreateCourseRepository {
  private readonly courses = new Map<string, CourseEntity>();

  async save(course: Course): Promise<Course> {
    const persistenceModel = CourseMapper.toPersistence(course);
    this.courses.set(persistenceModel.id, persistenceModel);

    const newEntity = this.courses.get(persistenceModel.id);
    return CourseMapper.toDomain(newEntity);
  }
}
