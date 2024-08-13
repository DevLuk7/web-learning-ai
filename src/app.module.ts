import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebPageModule } from './web-page/web-page.module';
import { ConfigModule } from '@nestjs/config';
import { IamModule } from './iam/iam.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/application/courses.module';
import { CoreModule } from './core/core.module';
import { ApplicationBootstrapOptions } from './common/interfaces/application-bootstrap-options.interface';
import { CoursesInfrastructureModule } from './courses/infrastructure/courses-infrastructure.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CqrsModule.forRoot(),
    WebPageModule,
    IamModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        CoursesModule.withInfrastucture(
          CoursesInfrastructureModule.use(options.driver),
        ),
      ],
    };
  }
}
