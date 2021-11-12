import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Comment } from './Comment'
import { Like } from './Like'

@Entity('Post')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  post_id?: string
  @Column()
  title?: string
  @Column()
  description?: string
  @Column('datetime')
  date_time?: string
  @Column()
  place?: string

  @OneToMany(() => Like, (like) => like.post)
  likeConnection?: Like[]

  @OneToMany(() => Comment, (comment) => comment.post)
  commentConnection?: Comment[]
}
