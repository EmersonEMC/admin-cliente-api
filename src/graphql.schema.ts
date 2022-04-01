/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUsuarioInput {
  nome?: Nullable<string>;
  email?: Nullable<number>;
  senha?: Nullable<string>;
  ativo?: Nullable<boolean>;
}

export class UpdateUsuarioInput {
  id?: Nullable<string>;
  nome?: Nullable<string>;
  email?: Nullable<number>;
  senha?: Nullable<string>;
  ativo?: Nullable<boolean>;
}

export abstract class IQuery {
  abstract usuarios():
    | Nullable<Nullable<Usuario>[]>
    | Promise<Nullable<Nullable<Usuario>[]>>;

  abstract usuario(id: string): Nullable<Usuario> | Promise<Nullable<Usuario>>;
}

export abstract class IMutation {
  abstract createUsuario(
    createUsuarioInput?: Nullable<CreateUsuarioInput>,
  ): Nullable<Usuario> | Promise<Nullable<Usuario>>;

  abstract updateUsuario(
    updateUsuarioInput?: Nullable<UpdateUsuarioInput>,
  ): Nullable<Usuario> | Promise<Nullable<Usuario>>;
}

export abstract class ISubscription {
  abstract usuarioCreated(): Nullable<Usuario> | Promise<Nullable<Usuario>>;
  abstract usuarioUpdated(): Nullable<Usuario> | Promise<Nullable<Usuario>>;
}

export class Usuario {
  id?: Nullable<number>;
  nome?: Nullable<string>;
  email?: Nullable<number>;
  senha?: Nullable<string>;
  ativo?: Nullable<boolean>;
}

type Nullable<T> = T | null;
