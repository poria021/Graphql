import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owners } from './entities/graphql.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Owners])],
  providers: [OwnersResolver, OwnersService],
  exports: [OwnersService],
})
export class OwnersModule {}
