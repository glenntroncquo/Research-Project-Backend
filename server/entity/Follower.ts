import { Column, Entity, OneToMany } from 'typeorm'
import { User } from './User'

@Entity('Follower')
export class Follower {
  @Column('uuid')
  user_id?: string
  @Column('uuid')
  follower_id?: string

//   @OneToMany(() => User, user => user)
}
