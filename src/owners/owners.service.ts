import { Injectable } from '@nestjs/common';
import { CreateGraphqlInput } from './dto/create-graphql.input';
import { UpdateGraphqlInput } from './dto/update-graphql.input';
import { log } from 'console';
import { InjectRepository } from '@nestjs/typeorm';
import { Owners } from './entities/graphql.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnersService {
  constructor(@InjectRepository(Owners) private owner: Repository<Owners>) {}

  create(createGraphqlInput: CreateGraphqlInput) {
    log('----create');
    let owner_obj = this.owner.create(createGraphqlInput);
    return this.owner.save(owner_obj);
  }

  findAll() {
    log('----findAll');
    return this.owner.find();
  }

  findOne(id: number) {
    log('----findone');
    // return `This action returns a #${id} graphql`;
    return this.owner.findOne({ where: { id } });
  }

  update(id: number, updateGraphqlInput: UpdateGraphqlInput) {
    log('----update');
    return { exampleField: 3, id: 33 };
    // return `This action updates a #${id} graphql`;
  }

  remove(id: number) {
    log('----remove');
    return { exampleField: 2 };
    return `This action removes a #${id} graphql`;
  }
}
