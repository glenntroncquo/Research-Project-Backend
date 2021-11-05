import { Router } from 'express'
import { EntityTarget, getRepository, Repository } from 'typeorm'

export class CrudController<T> {
  public router: Router = Router()
  public repository: Repository<T>

  constructor(model: EntityTarget<T>) {
    this.repository = getRepository(model)
  }
}
