import { spawn } from 'child_process'
import getPorts from 'get-multiple-ports'
import argsManager from 'args-manager'
import logManager from 'tor-log'
import hashPassword from 'tor-hashpassword'
import getValidOptions from 'tor-torrc-options'
import tor from './library/tor'

export default tor.bind(null, {
  spawn,
  getPorts,
  argsManager,
  logManager,
  hashPassword,
  getValidOptions
})
