import { Router } from 'express'

export class IRouter {
  public router: Router
  constructor() {
    this.router = Router()
  }
}
