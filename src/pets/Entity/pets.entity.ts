import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Owners } from 'src/owners/entities/graphql.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Pets {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @ManyToOne(() => Owners, (owners) => owners.pets)
  @Field((type) => Owners, { nullable: true })
  owner: Owners;

  @Column()
  @Field((type) => Int)
  ownerId: number;
}
