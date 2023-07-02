import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
//import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
    //constructor(private readonly configService: ConfigService) {}

    @Post('create')
    async create(@Body() dto: Omit<TopPageModel, '_id'>) {
        return dto;
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return id;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return id;
    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: TopPageModel) {
        return [id, dto];
    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindTopPageDto) {
        return dto;
    }
}
