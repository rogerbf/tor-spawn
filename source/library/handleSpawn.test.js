import handleSpawn from './handleSpawn'

const instance = {
  on: jest.fn(),
  once: jest.fn(),
  removeListener: jest.fn(),
  kill: jest.fn()
}

const spawn = jest.fn(() => {
  return instance
})

const logManager = jest.fn()

const dependencies = {
  spawn,
  logManager
}

test(`handleSpawn`, () => {
  expect(typeof (handleSpawn)).toBe(`function`)
})

test(`resolves`, () => {
  const tor = {
    path: `tor`,
    args: jest.fn(() => [ `SocksPort`, 9050 ])
  }

  handleSpawn(dependencies, tor)
  .then(tor => expect(tor).toBeDefined())
  .catch(error => expect(error).toBeFalsy())
})
