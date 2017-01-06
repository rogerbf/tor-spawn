const mergeObjects = arrayOfObjects =>
  arrayOfObjects.reduce((acc, obj) => ({ ...acc, ...obj }), {})

export default ({ getPorts }, tor) =>
  getPorts([ `SocksPort`, `ControlPort` ])
  .then(ports => ({
    ...tor, options: { ...mergeObjects(ports), ...tor.options }
  }))
