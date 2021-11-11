import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Activity')
export class Activity {
  @PrimaryGeneratedColumn('uuid')
  activity_id?: string
  @Column()
  title?: string
  @Column()
  description?: string
  @Column('datetime')
  date_time?: string
  @Column()
  place?: string
}
