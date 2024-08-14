import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseRepository } from 'src/courses/application/ports/create-course.repository';
import { Course } from 'src/courses/domain/course';
import { CourseMapper } from '../mappers/course.mapper';
import { CourseEntity } from '../entities/course.entity';

@Injectable()
export class OrmCreateCourseRepository implements CreateCourseRepository {
  constructor(
    @InjectModel(CourseEntity.name)
    private readonly usersModel: Model<CourseEntity>,
  ) {}

  async save(course: Course): Promise<Course> {
    const newCourse = new this.usersModel(course);
    newCourse.save();
    return CourseMapper.toDomain(newCourse);
  }
}
