import handlePorts from './handlePorts'
import handleControlPassword from './handleControlPassword'
import handleArguments from './handleArguments'
import handleSpawn from './handleSpawn'

// export default (
//   {
//     dependencies: {
//       getPorts,
//       hashPassword,
//       getValidOptions,
//       argsManager,
//       spawn,
//       logManager
//     }
//   },
//   configuration = {}
// ) => Promise.resolve(
export default (
  dependencies,
  configuration = {}
) => Promise.resolve(
  {
    path: configuration.path || `tor`,
    options: configuration.options || {}
  }
)
// .then(tor =>
//   getPorts([ `SocksPort`, `ControlPort` ])
//   .then(ports => ({
//     ...tor,
//     options: {
//       ...ports.reduce((acc, port) => ({ ...acc, ...port }), {}),
//       ...tor.options
//     }
//   }))
// )
.then(handlePorts.bind(null, dependencies))
// .then(tor =>
//   tor.options.HashedControlPassword ? tor : (
//     tor.controlPassword
//     ? (
//       hashPassword(tor.controlPassword)
//       .then(HashedControlPassword => ({
//         ...tor, options: { ...tor.options, HashedControlPassword }
//       }))
//     )
//     : (
//       randomPassword()
//       .then(random =>
//         hashPassword(random)
//         .then(HashedControlPassword => ({
//           ...tor,
//           controlPassword: random,
//           options: { ...tor.options, HashedControlPassword }
//         }))
//       )
//     )
//   )
// )
// .then(tor => handleControlPassword({ hashPassword }, tor))

// .then(tor =>
//   getValidOptions()
//   .then(validArgs => ({
//     ...tor, args: argsManager({ validArgs: validArgs })
//   }))
//   .then(tor => {
//     tor.args.add(tor.options)
//     return tor
//   })
// )
// .then(tor => handleArguments({ getValidOptions, argsManager }, tor))

// .then(tor => {
//   return new Promise((resolve, reject) => {
//     const errorHandler = error => reject(error)
//     const instance = spawn(tor.path, tor.args())
//     instance.once(`error`, errorHandler)
//     process.on(`exit`, () => instance.kill())
//     Object.assign(instance, { log: logManager(instance) }, tor)
//     process.nextTick(() => {
//       instance.removeListener(`error`, errorHandler)
//       resolve(instance)
//     })
//   })
// })
// .then(tor => handleSpawn({ spawn, logManager }, tor))
