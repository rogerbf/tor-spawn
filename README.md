# tor-spawn

Spawn a instance of tor.

## usage

```javascript
import Tor from 'tor-spawn'
import { commander as controlport, commands } from 'tor-commander'

Tor()
.then(tor => {
  tor.on(`notice`, console.log)
  controlport(tor.options.ControlPort)
  .write(commands.AUTHENTICATE(tor.controlPassword))
  .write(commands.SIGNAL.HEARTBEAT)
  .write(commands.QUIT)
  .execute()
  .then(success)
  .catch(error)
})
.catch(error => console.error(error))
```
