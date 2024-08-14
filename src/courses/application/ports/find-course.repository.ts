import { Course } from '../../domain/course';

export abstract class FindCourseRepository {
  abstract findAll(): Promise<Course[]>;
}
