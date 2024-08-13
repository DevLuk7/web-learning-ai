import { Course } from 'src/courses/domain/course';
import { CourseEntity } from '../entities/course.entity';

export class CourseMapper {
  static toDomain(courseEntity: CourseEntity): Course {
    const courseModel = new Course(courseEntity.id, courseEntity.name, []);
    return courseModel;
  }

  static toPersistence(course: Course) {
    const entity = new CourseEntity();
    entity.id = course.id;
    entity.name = course.name;
    return entity;
  }
}
