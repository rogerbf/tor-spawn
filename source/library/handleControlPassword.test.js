import handleControlPassword from './handleControlPassword'

const hashPassword = jest.fn((pw) => {
  return Promise.resolve(`a_hash`)
})

test(`handleControlPassword`, () => {
  expect(typeof (handleControlPassword)).toBe(`function`)
})
