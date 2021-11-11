import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Like')
export class Like {
  @PrimaryGeneratedColumn('uuid')
  like_id?: string
  @Column('uuid')
  activity_id?: string
  @Column('uuid')
  user_id?: string
}
