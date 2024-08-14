import { Course } from '../../domain/course';

export abstract class CreateCourseRepository {
  abstract save(course: Course): Promise<Course>;
}
