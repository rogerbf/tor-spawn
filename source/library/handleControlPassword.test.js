import handleControlPassword from './handleControlPassword'

const hashPassword = jest.fn((pw) => {
  return Promise.resolve(`a_hash`)
})

const randomHexString = jest.fn(() => {
  return Promise.resolve(`random_hex`)
})

const mockedDependencies = { hashPassword, randomHexString }

test(`handleControlPassword`, () => {
  expect(typeof (handleControlPassword)).toBe(`function`)
})

test(`HashedControlPassword defined`, () => {
  const tor = { options: { HashedControlPassword: `this_is_defined` } }
  handleControlPassword(mockedDependencies, tor)
  .then(tor => expect(tor).toBe(tor))
  .catch(error => expect(error).toBeFalsy())
})

test(`controlPassword defined`, () => {
  const tor = { controlPassword: `pass123`, options: {} }
  handleControlPassword(mockedDependencies, tor)
  .then(tor => expect(tor).toEqual(
    {
      ...tor,
      options: {
        HashedControlPassword: `a_hash`
      }
    }
  ))
  .catch(error => expect(error).toBeFalsy())
})

test(`no password defined`, () => {
  const tor = { options: { } }
  handleControlPassword(mockedDependencies, tor)
  .then(tor => {
    expect(tor).toEqual({
      ...tor,
      controlPassword: `random_hex`,
      options: {
        HashedControlPassword: `a_hash`
      }
    })
  })
  .catch(error => expect(error).toBeFalsy())
})
