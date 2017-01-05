export default ({ spawn, logManager }, tor) =>
  new Promise((resolve, reject) => {
    const errorHandler = error => reject(error)

    const instance = spawn(tor.path, tor.args())
    instance.once(`error`, errorHandler)
    process.on(`exit`, () => instance.kill())

    Object.assign(instance, { log: logManager(instance) }, tor)

    process.nextTick(() => {
      instance.removeListener(`error`, errorHandler)
      resolve(instance)
    })
  })
