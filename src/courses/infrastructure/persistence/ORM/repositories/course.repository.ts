import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseRepository } from 'src/courses/application/ports/courses.repository';
import { Course } from 'src/courses/domain/course';
import { CourseMapper } from '../mappers/course.mapper';

@Injectable()
export class OrmCourseRepository implements CourseRepository {
  constructor(
    @InjectModel(Course.name) private readonly usersModel: Model<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    const entities = await this.usersModel.find();
    return entities.map((item) => CourseMapper.toDomain(item));
  }

  async save(course: Course): Promise<Course> {
    const newCourse = new this.usersModel(course);
    newCourse.save();
    return CourseMapper.toDomain(newCourse);
  }
}
