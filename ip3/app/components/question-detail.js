import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service('favorites'),
  model() {
    return this.store.findAll('question');
  },
  actions: {
    addToFavorites(question){
      this.get('favorites').add(question);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    updateQuestion(question, formInputs) {
      this.sendAction('updateQuestion', question, formInputs);
    },
    saveAnswer(formInputs) {
      this.sendAction('saveAnswer', formInputs);
    }
  }
});
