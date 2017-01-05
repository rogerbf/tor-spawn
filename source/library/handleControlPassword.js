import { randomBytes } from 'crypto'

const randomPassword = () =>
  new Promise((resolve, reject) => {
    randomBytes(8, (error, bytes) => {
      error && reject(error)
      resolve(bytes.toString(`hex`))
    })
  })

export default ({ hashPassword }, tor) => (
  tor.options.HashedControlPassword ? tor : (
    tor.controlPassword
    ? (
      hashPassword(tor.controlPassword)
      .then(HashedControlPassword => ({
        ...tor, options: { ...tor.options, HashedControlPassword }
      }))
    )
    : (
      randomPassword()
      .then(random =>
        hashPassword(random)
        .then(HashedControlPassword => ({
          ...tor,
          controlPassword: random,
          options: { ...tor.options, HashedControlPassword }
        }))
      )
    )
  )
)
