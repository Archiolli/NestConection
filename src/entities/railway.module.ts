import { MiddlewareConsumer, Module } from '@nestjs/common';
import { RailwayoController } from './railway.controller';
import { PrismaService } from 'src/database/prisma.service';
import { RailwayService } from './railway.service';


@Module({
    controllers: [RailwayoController],
    providers: [RailwayService, PrismaService],
})
export class RailwayoModule { }