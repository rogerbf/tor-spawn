import randomPassword from './randomPassword'

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
