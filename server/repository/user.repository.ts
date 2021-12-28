import { Repository } from 'typeorm'
import { User } from '../entity/User'
import { IRepository } from '../models/irepository'

export class UserRepository extends IRepository<User> {
  constructor() {
    super(User)
  }

  public test() {
    console.log('hello ')
  }
}
