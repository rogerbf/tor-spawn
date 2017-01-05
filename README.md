# tor-spawn

```javascript
import tor from 'tor-spawn'
import { commander as controlport, commands } from 'tor-commander'

tor({
  path: `tor`,
  configuration: {
    SocketPort: 9050,
    ControlPort: 9055,
    HashedControlPassword: tor.hashPassword(`hello`)
  }
})
.then(instance => {
  controlport(instance.controlPort)
  .write(commands.AUTHENTICATE(`hello`))
  .write(commands.SIGNAL.HEARTBEAT)
  .write(commands.QUIT)
  .execute()
  .then(success)
  .catch(error)
})
.catch(error)
```
