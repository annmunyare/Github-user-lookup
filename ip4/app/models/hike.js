import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  state: DS.attr(),
  distance: DS.attr(),
  difficulty: DS.attr(),
  image: DS.attr(),
  timestamp: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
