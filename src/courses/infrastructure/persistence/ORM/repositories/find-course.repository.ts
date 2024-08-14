import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from 'src/courses/domain/course';
import { CourseMapper } from '../mappers/course.mapper';
import { CourseEntity } from '../entities/course.entity';
import { FindCourseRepository } from 'src/courses/application/ports/find-course.repository';

@Injectable()
export class OrmFindCourseRepository implements FindCourseRepository {
  constructor(
    @InjectModel(CourseEntity.name)
    private readonly usersModel: Model<CourseEntity>,
  ) {}

  async findAll(): Promise<Course[]> {
    const entities = await this.usersModel.find();
    return entities.map((item) => CourseMapper.toDomain(item));
  }
}
