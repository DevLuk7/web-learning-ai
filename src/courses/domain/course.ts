import { Lesson } from './value-objects/lesson';

export class Course {
  constructor(
    public id: string,
    public name: string,
    public lessons: Lesson[],
  ) {}
}
