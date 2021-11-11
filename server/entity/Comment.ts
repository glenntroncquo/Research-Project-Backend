import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Comment')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  comment_id?: string
  @Column('uuid')
  activity_id?: string
  @Column('uuid')
  user_id?: string
  @Column()
  description?: string
}
