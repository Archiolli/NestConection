import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import  { railwayDTO } from './railway.dto' 

    
@Injectable()
export class RailwayService {
    constructor(private prisma: PrismaService) { }


    async findAll() {
        return this.prisma.railway_stoppages_daily.findMany()
    }

   
}