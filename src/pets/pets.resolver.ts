import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pets } from './Entity/pets.entity';
import { CreatePetDto } from './Dto/create.pets.dto';
import { Owners } from 'src/owners/entities/graphql.entity';

@Resolver((of) => Pets)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pets])
  async pets(): Promise<Pets[]> {
    return this.petsService.getAll();
  }

  @Mutation((ret) => Pets)
  createPets(@Args('create_pets') Pet_data: CreatePetDto): Promise<Pets> {
    return this.petsService.createPets(Pet_data);
  }
  @Query((returns) => Pets)
  getOne(@Args('id', { type: () => Int }) id: number): Promise<Pets> {
    return this.petsService.getOne(id);
  }

  @ResolveField((returns) => Owners)
  owner(@Parent() pet: Pets): Promise<Owners> {
    return this.petsService.getOwner(pet.id);
  }
}
