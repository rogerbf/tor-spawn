export default ({ getValidOptions, argsManager }, tor) =>
  getValidOptions()
  .then(validArgs => ({
    ...tor, args: argsManager({ validArgs: validArgs })
  }))
  .then(tor => {
    tor.args.add(tor.options)
    return tor
  })
