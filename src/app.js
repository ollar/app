import { log } from './utils/debug.js';
import initializers from './initializers/index.js';

import { inject } from './services/index.js';

class App {
    _runInitializers() {
        log('// Run initializers');
        return Promise.all(
            initializers.map(_initializer => _initializer(this))
        );
    }

    _initServices() {
        log('// init services');
        return Promise.resolve();
    }

    async init() {
        log('App is booting');

        // Run initializers
        await this._runInitializers();

        // init services
        await this._initServices();
        inject('router', this);
        console.log(this);
    }
}

export default App;
