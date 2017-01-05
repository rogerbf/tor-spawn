import { spawn } from 'child_process'
import getPorts from 'get-multiple-ports'
import argsManager from 'args-manager'
import logManager from 'tor-log'
import hashPassword from 'tor-hashpassword'
import getValidOptions from 'tor-torrc-options'

export default {
  spawn,
  getPorts,
  argsManager,
  logManager,
  hashPassword,
  getValidOptions
}
