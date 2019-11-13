import Base from './base.js';

export default Object.assign({}, Base, {
    _name: 'tests_runner',
    _type: 'serial',

    init() {
        console.log('running tests');
    },
});
