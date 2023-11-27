import { CreateAnimalDTO } from './DTO/CreateAnimal.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateAnimalDTO } from './DTO/UpdateAnimal.dto copy';
import { animalDTO } from './DTO/animal.dto';
import { animalsService } from './animals.service';
import { ChangeAnimalDTO } from './DTO/change-state-animal.dto';

@ApiTags('animals')
@Controller('animals')
export class animalsController {

    constructor(private readonly animalsService:animalsService){}

    @ApiOperation({ description: "find animals", summary: "find animals", })
    @Get()
    async find() {
        return await this.animalsService.find()
    }

    @ApiOperation({ description: "find One animals", summary: "find One animals", })
    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.animalsService.findOne(id);
    }


    @ApiOperation({ description: "Create animals", summary: "Create animals", })
    @Post()
    async create(@Body() payload: CreateAnimalDTO) {
        return await this.animalsService.create(payload);
    }



    @ApiOperation({ description: "update animals", summary: "update animals", })
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateAnimalDTO) {
        return await this.animalsService.Put(id,payload);
    }


    @ApiOperation({ description: "change animals", summary: "change animals", })
    @Patch(':id')
    async changeState(@Param('id', ParseIntPipe) id: number, @Body() payload:ChangeAnimalDTO) {
        return await this.animalsService.changeState(id,payload);
    }


    @ApiOperation({ description: "delete animals", summary: "delete animals", })
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.animalsService.delete(id);
    }
}
