import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class TypeormConnection {
  getConfig() {
    let ormConfig: TypeOrmModuleOptions;
    if (process.env.PRODUCTION) {
      throw new Error('configure Production server');
    } else {
      ormConfig = {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'pass123',
        database: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
      };
    }
    return ormConfig;
  }
}

export default new TypeormConnection().getConfig();
