import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entity/User'

import { IRouter } from '../models/router'
import { UserRepository } from '../repository/user.repository'
import { UserService } from '../service/user.service'

export class UserController extends IRouter {
  constructor(public readonly _userService: UserService) {
    super()
    this.router.post('/signup', this.register)
    this.router.get('/', this.all)
  }

  all(req: Request, res: Response) {
    res.send('eindelijk de bug gevonden')
  }

  register(req: Request, res: Response) {
    try {
      // console.log(new UserService().test())
      new UserRepository().test()
      new UserService().test()
      this._userService.test()
      res.send('ok')
      // this._userService.test()
    } catch (err) {
      console.log(err)
      res.status(400)
      res.send('Oops something went wrong')
    }
  }
}
