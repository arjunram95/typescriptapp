import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string; // i changed from number

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
