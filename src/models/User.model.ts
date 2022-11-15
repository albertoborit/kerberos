import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
      UID: string

    @Column()
      password: string
}
