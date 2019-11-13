export default {
    _name: 'BaseInitializer',
    _type: 'parallel', // or serial

    // App -> Promise
    init() {
        throw 'Initializer init method must be specified';
    },
};
