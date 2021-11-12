import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Comment } from './Comment'
import { Like } from './Like'

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

  @OneToMany(() => Like, (like) => like.user)
  likeConnection?: Like[]

  @OneToMany(() => Comment, (comment) => comment.user)
  commentConnection?: Comment[]
}
