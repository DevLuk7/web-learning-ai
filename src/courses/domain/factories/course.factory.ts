import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Course } from '../course';

@Injectable()
export class CourseFactory {
  create(name: string) {
    const courseId = randomUUID();
    return new Course(courseId, name, []);
  }
}
