import { Module } from '@nestjs/common';
import { OrmCoursePersistenceModule } from './persistence/ORM/orm-persistence.module';
import { InMemoryCoursePersistenceModule } from './persistence/in-memory/in-memory-persistence.module';

@Module({})
export class CoursesInfrastructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const persistenceModule =
      driver === 'orm'
        ? OrmCoursePersistenceModule
        : InMemoryCoursePersistenceModule;

    return {
      module: CoursesInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
