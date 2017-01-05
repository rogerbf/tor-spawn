import handlePorts from './handlePorts'
import handleControlPassword from './handleControlPassword'
import handleArguments from './handleArguments'
import handleSpawn from './handleSpawn'

export default (dependencies, configuration = {}) =>
  Promise.resolve({
    path: configuration.path || `tor`,
    options: configuration.options || {}
  })
  .then(handlePorts.bind(null, dependencies))
  .then(handleControlPassword.bind(null, dependencies))
  .then(handleArguments.bind(null, dependencies))
  .then(handleSpawn.bind(null, dependencies))
