import { log } from './utils/debug.js';
import initializers from './initializers/index.js';

class App {
    _services = {};
    _lookup() { }

    _runInitializers() {
        const serialInitializers = initializers.filter(initer => initer._type === 'serial');
        const parallerInitializers = initializers.filter(initer => initer._type === 'parallel');

        return Promise.all([
            new Promise(async res => {
                for (let index = 0; index < serialInitializers.length; index++) {
                    await serialInitializers[index].init(this)
                }
                res();
            }),
            Promise.all(parallerInitializers.map(_initializer => _initializer.init(this))),
        ]);
    }

    async init() {
        log('App is booting');

        // Run initializers
        log('// Run initializers');
        await this._runInitializers();
    }
}

export default App;
