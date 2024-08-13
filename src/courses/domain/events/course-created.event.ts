import { Course } from '../course';

export class CourseCreatedEvent {
  constructor(public readonly course: Course) {}
}
