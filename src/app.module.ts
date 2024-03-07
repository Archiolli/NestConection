import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RailwayoModule } from './entities/railway.module';
import { RailwayService } from './entities/railway.service';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [RailwayoModule],
  controllers: [],
  providers: [RailwayService ,AppService, PrismaService],
})
export class AppModule {}
