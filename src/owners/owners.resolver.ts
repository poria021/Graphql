import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OwnersService } from './owners.service';
import { Owners } from './entities/graphql.entity';
import { CreateGraphqlInput } from './dto/create-graphql.input';
import { UpdateGraphqlInput } from './dto/update-graphql.input';

@Resolver(() => Owners)
export class OwnersResolver {
  constructor(private readonly graphqlService: OwnersService) {}

  // mutation{
  //  createGraphql(createGraphqlInput:{
  //     exampleField:1
  //   }){
  //     exampleField
  //   }
  // }
  @Mutation(() => Owners)
  createGraphql(
    @Args('createGraphqlInput') createGraphqlInput: CreateGraphqlInput,
  ) {
    return this.graphqlService.create(createGraphqlInput);
  }

  //   query {
  //   graphqlAll{
  //     exampleField
  //   }
  // }
  @Query(() => [Owners], { name: 'findAll' })
  findAll() {
    return this.graphqlService.findAll();
  }

  //   query {
  //   graphql(id: 1) {
  //     exampleField
  //   }
  // }
  @Query(() => Owners, { name: 'graphql' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlService.findOne(id);
  }

  //   mutation{
  //   updateGraphql(updateGraphqlInput:{
  //     exampleField:2,id:2
  //   }){exampleField}
  // }
  @Mutation(() => Owners)
  updateGraphql(
    @Args('updateGraphqlInput') updateGraphqlInput: UpdateGraphqlInput,
  ) {
    return this.graphqlService.update(
      updateGraphqlInput.id,
      updateGraphqlInput,
    );
  }

  @Mutation(() => Owners)
  removeGraphql(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlService.remove(id);
  }
}
