import {
    Controller,
    ForbiddenException,
    Get,
} from '@nestjs/common';
import { RailwayService } from './railway.service';

@Controller('railway')
export class RailwayoController {
    constructor(private readonly railwayService: RailwayService) { }


    @Get()
    async findAll() {
        try {
            return await this.railwayService.findAll();
        } catch (error) {
            throw new ForbiddenException(error);
        }
    }




}