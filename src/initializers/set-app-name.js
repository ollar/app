import Base from './base.js';

const APP_NAME = 'app_boilerplate';

export default Object.assign({}, Base, {
    _name: 'set-app-name',

    init(app) {
        app._name = APP_NAME;
        return Base.init(...arguments);
    },
});
