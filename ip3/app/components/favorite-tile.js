import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service('favorites'),
  actions: {
    addToFavorites(question) {
      this.get('favorites').add(question);
    }
  }
});
