import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('User')
export default class User {
    @PrimaryGeneratedColumn()
      UID: string

    @Column('text', { nullable: true })
      password: string
}
