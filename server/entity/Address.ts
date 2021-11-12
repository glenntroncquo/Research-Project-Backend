import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Address')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  address_id?: string
  @Column()
  street?: string
  @Column()
  house_number?: number
  @Column()
  appartment_details?: string
  @Column()
  city?: string
  @Column()
  zip?: number
  @Column()
  state?: string
  @Column()
  country?: string
}
