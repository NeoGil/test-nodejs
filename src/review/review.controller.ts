import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
    @Post('create')
    async create(@Body() dto: Omit<ReviewModel, '_id'>) {
        return dto;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return id;
    }

    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productId: string) {
        return productId;
    }
}