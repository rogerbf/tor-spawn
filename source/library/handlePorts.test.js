import handlePorts from './handlePorts'

test(`handlePorts`, () => {
  expect(typeof (handlePorts)).toBe(`function`)
  const getPorts = jest.fn(arr => {
    return Promise.resolve([{ SocksPort: 3000 }, { ControlPort: 3000 }])
  })
  handlePorts({ getPorts }, { options: {} })
  .then(tor => {
    expect(tor).toEqual({ options: { SocksPort: 3000, ControlPort: 3000 } })
  })
  .catch(error => {
    expect(error).toBeFalsy()
  })
  expect(getPorts.mock.calls[0]).toEqual([ [`SocksPort`, `ControlPort`] ])
})
