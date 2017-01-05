export default ({ spawn, logManager }, tor) =>
  new Promise((resolve, reject) => {
    const instance = spawn(tor.path, tor.args())

    const errorHandler = error => reject(error)
    instance.once(`error`, errorHandler)

    process.on(`exit`, () => instance.kill())

    process.nextTick(() => {
      instance.removeListener(`error`, errorHandler)
      resolve({ ...tor, instance, log: logManager(instance) })
    })
  })
