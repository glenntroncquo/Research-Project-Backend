import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Post } from './Post'
import { User } from './User'

@Entity('Comment')
export class Comment {
  @PrimaryColumn('uuid')
  activity_id?: string
  @PrimaryColumn('uuid')
  user_id?: string
  @Column()
  description?: string

  @ManyToOne(() => User, (user) => user.commentConnection)
  @JoinColumn({ name: 'user_id' })
  user?: User
  @ManyToOne(() => Post, (post) => post.commentConnection)
  @JoinColumn({ name: 'activity_id' })
  post?: Post
}
