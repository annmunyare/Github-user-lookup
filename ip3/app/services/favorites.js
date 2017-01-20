import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],
  
  add(question) {
    console.log(questions); // why is it undefined?
    this.get('questions').pushObject(question);
  }
});
