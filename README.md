# tor-spawn

```javascript
import spawnTor from 'tor-spawn'
import { commander as controlport, commands } from 'tor-commander'

spawnTor()
.then(tor => {
  controlport(tor.options.ControlPort)
  .write(commands.AUTHENTICATE())
  .write(commands.SIGNAL.HEARTBEAT)
  .write(commands.QUIT)
  .execute()
  .then(console.log)
  .catch(console.error)
})
.catch(error => console.error)
```
