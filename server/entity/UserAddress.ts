import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Address } from './Address'
import { User } from './User'

@Entity('UserAddress')
export class UserAddress {
  @PrimaryColumn('uuid')
  user_id?: string
  @PrimaryColumn('uuid')
  address_id?: string

  @ManyToOne(() => User, (user) => user.addressConnection)
  @JoinColumn({ name: 'user_id' })
  user?: User[]

  @ManyToOne(() => Address, (address) => address.userConnection)
  @JoinColumn({ name: 'address_id' })
  address?: Address[]
}
