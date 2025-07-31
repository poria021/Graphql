import { Injectable } from '@nestjs/common';
import { Pets } from './Entity/pets.entity';
import { log } from 'console';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './Dto/create.pets.dto';
import { OwnersService } from 'src/owners/owners.service';
import { Owners } from 'src/owners/entities/graphql.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets) private pets: Repository<Pets>,
    private owner: OwnersService,
  ) {}

  async getAll(): Promise<Pets[]> {
    return this.pets.find();
  }
  createPets(pets_data: CreatePetDto): Promise<Pets> {
    let ourPets = this.pets.create(pets_data);
    return this.pets.save(ourPets);
  }
  getOne(id: number): Promise<Pets> {
    return this.pets.findOne({ where: { id } });
  }
  getOwner(id: number): Promise<Owners> {
    return this.owner.findOne(id);
  }
}
