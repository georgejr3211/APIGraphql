import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity('users')
export class User extends BaseEntity{

  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() email: string;
  @Column() password: string;
  @Column() photo: string;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}