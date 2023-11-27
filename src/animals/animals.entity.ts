import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"animals"})
export class AnimalEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ name:"name",type: "varchar", length: "100"})
    name: string;
  
    @Column({name:"race",type: "varchar",length: "50"})
    race: string;
  
    @Column({name:"size",type: "integer" })
    size: number;
  
    @Column({name:"specie",type: "varchar", length:"50"})
    specie: string;
  
    @Column({name:"gender",type: "varchar", length:"60"})
    gender: string;
  
    @Column({name:"age", type: "integer"})
    age: number;
  
    @Column({name:"clasification",type: "varchar", length:"50"})
    clasification: string;
  

}