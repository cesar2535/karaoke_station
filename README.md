Karaoke Station with QTS in REFACTORING
=====
### Dependencies
- redux
- react
- react-router
- history
- stylus
- poststylus

### Configuration
#### React-Router
- **history**: use the `Hash History (Routing)`
```js
import createHistory from 'history/lib/createHashHistory';
const history = createHistory({ queryKey: '_key' });
```
