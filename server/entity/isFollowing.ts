import { Entity, PrimaryColumn } from 'typeorm'

@Entity('IsFollowing')
export class IsFollowing {
  @PrimaryColumn('uuid')
  isfollowing_id?: string
}
