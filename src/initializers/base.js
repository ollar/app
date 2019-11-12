export default {
    _name: 'BaseInitializer',
    _type: 'parallel', // or serial

    init() {
        return Promise.resolve();
    },
};
