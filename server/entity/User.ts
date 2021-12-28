import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Activity } from './Activity'
import { UserAddress } from './UserAddress'

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

  @OneToMany(() => Activity, (activity) => activity.user)
  activities?: Activity[]

  @OneToMany(() => UserAddress, (userAddress) => userAddress.user)
  addressConnection?: string
}
