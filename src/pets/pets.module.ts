import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pets } from './Entity/pets.entity';
import { OwnersService } from 'src/owners/owners.service';
import { OwnersModule } from 'src/owners/owners.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pets]), OwnersModule],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
