import { log } from './utils/debug.js';
import initializers from './initializers/index.js';

class App {
    _services = {};
    _lookup() {}

    init() {
        log('App is booting');

        // Run initializers
        log('// Run initializers');

        // Run app instance hydration
        log('// Run app instance hydration');
    }
}

export default App;
