import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from './config/config.module';
import { DrugModule } from './drug/drug.module';

@Module({
  imports: [
    ConfigModule,
    DrugModule,
    PrismaModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
