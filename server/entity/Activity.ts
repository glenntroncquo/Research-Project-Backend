import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity('Activity')
export class Activity {
  @PrimaryGeneratedColumn('uuid')
  activity_id?: string
  @Column()
  title?: string
  @Column()
  description?: string
  @Column()
  rating?: string
  @Column()
  estimated_weight?: number
  @Column()
  experience?: string
  @Column()
  longitude?: number
  @Column()
  latitude?: number

  @ManyToOne((type) => User, (user) => user.activities)
  user?: User[]
}
