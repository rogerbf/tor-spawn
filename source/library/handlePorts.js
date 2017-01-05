export default ({ getPorts }, tor) =>
  getPorts([ `SocksPort`, `ControlPort` ])
  .then(ports => ({
    ...tor,
    options: {
      ...ports.reduce((acc, port) => ({ ...acc, ...port }), {}),
      ...tor.options
    }
  }))
