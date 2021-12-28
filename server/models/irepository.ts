import { EntityTarget, getRepository, Repository } from 'typeorm'

export class IRepository<T> {
  public repository: Repository<T>
  constructor(model: EntityTarget<T>) {
    this.repository = getRepository(model)
  }
}
