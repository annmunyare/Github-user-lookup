import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerUpdate: false,
  actions: {
    showAnswerUpdate() {
      this.set('showAnswerUpdate', true);
    },
    hideAnswerUpdate() {
      this.set('showAnswerUpdate', false);
    },
    update(answer) {
      var params = {
        text: this.get('text')
      };
      this.set('showAnswerUpdate', false);
      this.sendAction('update', answer, params);
    }
  }
});
