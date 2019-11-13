import Base from './base.js';

export default Object.assign({}, Base, {
    _name: 'set-document-title',

    init() {
        document.title = 'Bycicle';
    },
});
