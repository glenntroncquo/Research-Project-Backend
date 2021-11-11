import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Follower } from './Follower'

@Entity('User')
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id?: string
  @Column()
  name?: string
  @Column()
  lastname?: string
  @Column()
  email?: string

//   @OneToMany(() => Follower, follower => follower.user_id)
  
}
