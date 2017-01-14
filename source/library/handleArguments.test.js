import handleArguments from './handleArguments'
import dependencies from './dependencies'

const getValidOptions = jest.fn(() => {
  return Promise.resolve([`ControlPort`, `SocksPort`])
})

test(`handleArguments`, () => {
  expect(typeof (handleArguments)).toBe(`function`)
})

test(`constructs args array`, () => {
  const tor = { options: { SocksPort: 9050 } }
  handleArguments(
    { getValidOptions, argsManager: dependencies.argsManager },
    tor
  )
  .then(tor => {
    expect(tor.args()).toEqual([ `SocksPort`, 9050 ])
  })
  .catch(error => expect(error).toBeFalsy())
})

test(`rejects`, () => {
  const tor = { options: { SomeOpt: `error` } }
  handleArguments(
    { getValidOptions, argsManager: dependencies.argsManager },
    tor
  )
  .then(tor => expect(tor).toBeFalsy())
  .catch(error => expect(error).toBeDefined())
})
