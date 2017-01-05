import { randomBytes } from 'crypto'

export default () => new Promise((resolve, reject) => {
  randomBytes(8, (error, bytes) => {
    error && reject(error)
    resolve(bytes.toString(`hex`))
  })
})
