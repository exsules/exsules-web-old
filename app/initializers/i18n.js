export function initialize(_, app) {
  app.inject('component', 'i18n', 'service:i18n');
}

export default {
  name: 'i18n',
  initialize: initialize,
  after: 'ember-i18n'
};
