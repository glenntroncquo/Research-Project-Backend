export class UserService {
  constructor() {}

  test() {
    console.log('test')
  }
}


// return new Promise(async (resolve, reject) => {
//       firebase
//         .auth()
//         .createUser({
//           email: user.email,
//           password: user.password,
//         })
//         .then((res) => resolve(res))

//         .catch((err) => {
//           //   res.statusMessage = err.message
//           //   reject(res.status(400).end())
//           return reject(err)
//         })
//     }).catch((err) => {
//       //   res.statusMessage = err.message
//       //   res.status(400)
//       console.log('this is logged')
//       console.log(err)
//     })