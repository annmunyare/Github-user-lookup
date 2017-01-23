import Ember from 'ember';

export default Ember.Component.extend({
  questionOutput: Ember.computed('question.author', 'question.text', function() {
    return this.get('question.author') + ' asked: ' + '"' + this.get('question.text') + '"';
  }),
  actions: {
    edit(question, params) {
      this.sendAction('edit', question, params);
    },

    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
