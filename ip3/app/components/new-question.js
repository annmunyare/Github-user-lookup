import Ember from 'ember';

export default Ember.Component.extend({
  showQuestionForm: false,
  actions: {
    showQuestionForm() {
      this.set('showQuestionForm', true);
    },
    hideQuestionForm() {
      this.set('showQuestionForm', false);
    },
    saveQuestion() {
      var params = {
        text: this.get('text'),
        author: this.get('author')
      };
      this.set('showQuestionForm', false);
      this.set('text', "");
      this.set('author', "");
      this.sendAction('saveQuestion', params);
    }
  }
});
