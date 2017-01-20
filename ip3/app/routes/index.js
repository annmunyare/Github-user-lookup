import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service('favorites'),
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    favorite(question) {
      this.get('favorites').add(question);
    }
  }
});




// delete(comment) {
//   if (confirm('Are you sure you want to delete this question?')) {
//     comment.destroyRecord();
//     this.transitionTo('index');
//   }
// },
