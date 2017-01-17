import handleSpawn from './handleSpawn'

const createDependencies = (resolves = true) => {
  const instance = {
    on: jest.fn(),
    once: resolves ? jest.fn() : jest.fn((eventName, fn) => fn(`general error`)),
    removeListener: jest.fn(),
    kill: jest.fn()
  }

  const spawn = jest.fn(() => {
    return instance
  })

  const logManager = jest.fn()

  return {
    spawn,
    logManager
  }
}

const tor = {
  path: `tor`,
  args: jest.fn(() => [ `SocksPort`, 9050 ])
}

test(`handleSpawn`, () => {
  expect(typeof (handleSpawn)).toBe(`function`)
})

test(`resolves`, () => {
  handleSpawn(createDependencies(), tor)
  .then(tor => expect(tor).toBeDefined())
  .catch(error => expect(error).toBeUndefined())
})

test(`rejects`, () => {
  handleSpawn(createDependencies(false), tor)
  .then(instance => expect(instance).toBeUndefined())
  .catch(error => expect(error).toEqual(`general error`))
})

test(`exits with process`, () => {
  Object.assign(process, { on: jest.fn((eventName, fn) => fn()) })
  handleSpawn(createDependencies(), tor)
  .then(tor => expect(tor).toBeDefined())
  .catch(error => expect(error).toBeUndefined())
})
