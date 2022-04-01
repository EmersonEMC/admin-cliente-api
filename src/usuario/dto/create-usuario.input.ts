import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUsuarioInput {
  @Field(() => String)
  nome!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  senha!: string;

  @Field(() => Boolean)
  ativo!: boolean;
}
