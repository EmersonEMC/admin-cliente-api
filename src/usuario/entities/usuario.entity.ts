import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Usuario {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column({ length: 500, nullable: false })
  nome!: string;

  @Field()
  @Column('text', { nullable: false })
  email!: string;

  @Field()
  @Column('varchar', { length: 100 })
  senha!: string;

  @Field()
  @Column('bool', { default: true })
  ativo!: string;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at!: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at!: Date;

  @Field()
  @Column()
  @DeleteDateColumn()
  deleted_at!: Date;
}
