import { log } from './utils/debug.js';
import initializers from './initializers/index.js';

class App {
    _services = {};
    _lookup() {}

    async init() {
        log('App is booting');

        // Run initializers
        log('// Run initializers');
        await Promise.all(
            initializers.map(_initializer => _initializer.init(this))
        );
    }
}

export default App;
