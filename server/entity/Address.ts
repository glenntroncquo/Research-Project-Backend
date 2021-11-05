import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UserAddress } from './UserAddress'

@Entity('Address')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  address_id?: string
  @Column()
  street?: string
  @Column()
  house_number?: string
  @Column()
  streetappartment_details?: string
  @Column()
  city?: string
  @Column()
  zip?: string
  @Column()
  state?: string
  @Column()
  country?: string

  @OneToMany(() => UserAddress, (userAddress) => userAddress.address)
  userConnection?: string
}
