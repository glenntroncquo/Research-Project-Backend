import { Request, Response } from 'express'
import firebase from '../firebase/useFirebase'
import { UserDTO } from '../DTO/user.dto'

export class UserController {
  constructor() {}

  all() {}

  createUser(req: Request, res: Response) {
    const user: UserDTO = req.body
    new Promise(async (resolve, reject) => {
      firebase
        .auth()
        .createUser({
          email: user.email,
          password: user.password,
        })
        .then((result) => resolve(res.send(result)))

        .catch((err) => reject(console.log(err)))
    })
  }
}
