import { PartialType } from "@nestjs/swagger";
import { animalDTO } from "./animal.dto";

export class ChangeAnimalDTO extends PartialType(animalDTO){
    
}