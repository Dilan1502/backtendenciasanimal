import { CreateAnimalDTO } from './DTO/CreateAnimal.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AnimalEntity } from './animals.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAnimalDTO } from './DTO/UpdateAnimal.dto copy';
import { ChangeAnimalDTO } from './DTO/change-state-animal.dto';


@Injectable()
export class animalsService {

    constructor(@InjectRepository(AnimalEntity) private animalRepository: Repository<AnimalEntity>,){}

    async find(){
        const animals:AnimalEntity[]= await this.animalRepository.find();
        return animals;
    }

    async findOne(id:number){
        const findAnimal:AnimalEntity=await this.animalRepository.findOne({
            where:{id:id}
        })

        if(!findAnimal){
            throw new  NotFoundException({
                message: "animal no encontrado",
                error: "no encontrado"
            })
        }

        return findAnimal;
    }

    async create(payload:CreateAnimalDTO){
        const animalCreate:AnimalEntity=this.animalRepository.create();
        animalCreate.name=payload.name
        animalCreate.age=payload.age
        animalCreate.gender=payload.gender
        animalCreate.specie=payload.specie
        animalCreate.size=payload.size
        animalCreate.clasification=payload.clasification
        animalCreate.race=payload.race
        return await this.animalRepository.save(animalCreate);
    }

    async Put(id:number,payload:UpdateAnimalDTO){
        const animalFind:AnimalEntity=await this.findOne(id);
        if(!animalFind){
            throw new  NotFoundException({
                message: "animal no encontrado",
                error: "no encontrado"
            })
        }

        const UpdateAnimal:UpdateAnimalDTO={...payload}

        return await this.animalRepository.update(id, UpdateAnimal);
    }

    async changeState(id:number, payload:ChangeAnimalDTO){
        const existingAnimal:AnimalEntity = await this.findOne(id);

        if (!existingAnimal) {
          throw new NotFoundException({
            message: "animal no encontrado",
            error: "no encontrado"
        });
        }
    
        const updatedAnimal:AnimalEntity = { ...existingAnimal, ...payload};
        
        return await this.animalRepository.update(id, updatedAnimal);
    }

    async delete(id:number){
        const animalFind= await this.findOne(id);

        if(!animalFind){
            throw new  NotFoundException({
                message: "animal no encontrado",
                error: "no encontrado"
            })
        }

        return await this.animalRepository.delete(id)
    }
}
