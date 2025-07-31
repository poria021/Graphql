import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreatePetDto {
  @Field()
  @IsString()
  @IsAlpha()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  type: string;

  @Field()
  ownerId: number;
}
