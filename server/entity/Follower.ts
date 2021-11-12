import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('Follower')
export class Follower {
  @Column('uuid')
  user_id?: string
  @PrimaryColumn('uuid')
  follower_id?: string
}
