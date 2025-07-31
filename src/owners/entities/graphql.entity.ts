import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pets } from 'src/pets/Entity/pets.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owners {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;

  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Pets, (pets) => pets.owner)
  @Field((type) => [Pets], { nullable: true })
  pets: Pets[];
}
