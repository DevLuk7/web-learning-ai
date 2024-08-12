import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Course } from '../course';
import { Lesson } from '../value-objects/lesson';

@Injectable()
export class CourseFactory {
  create(name: string, lessons: Lesson[]) {
    const courseId = randomUUID();
    return new Course(courseId, name, lessons);
  }
}
