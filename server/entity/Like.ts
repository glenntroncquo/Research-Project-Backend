import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Post } from './Post'
import { User } from './User'

@Entity('Like')
export class Like {
  @PrimaryColumn('uuid')
  post_id?: string
  @PrimaryColumn('uuid')
  user_id?: string

  @ManyToOne(() => User, (user) => user.likeConnection)
  @JoinColumn({ name: 'user_id' })
  user?: User

  @ManyToOne(() => Post, (post) => post.likeConnection)
  @JoinColumn({ name: 'post_id' })
  post?: Post
}
