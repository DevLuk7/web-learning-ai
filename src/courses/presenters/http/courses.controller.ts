import { Controller, Get, Post, Body } from '@nestjs/common';
import { CoursesService } from '../../application/courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { CreateCourseCommand } from 'src/courses/application/commands/create-course.command';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(
      new CreateCourseCommand(createCourseDto.name),
    );
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.coursesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
  //   return this.coursesService.update(+id, updateCourseDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.coursesService.remove(+id);
  // }
}
