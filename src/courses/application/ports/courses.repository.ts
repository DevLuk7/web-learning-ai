import { Course } from '../../domain/course';

export abstract class CourseRepository {
  abstract findAll(): Promise<Course[]>;
  abstract save(course: Course): Promise<Course>;
}
