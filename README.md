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

## api

### `Tor([configuration])`

`configuration` is an object which defaults to:

```javascript
{
  path: `tor`,
  options: {}
}
```

`options` contains tor configuration data which are passed on as arguments when spawning tor.

By default, SocksPort and ControlPort are set to any two available ports.
