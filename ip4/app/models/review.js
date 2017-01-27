import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  comment: DS.attr(),
  rating: DS.attr(),
  date: DS.attr(),
  hike: DS.belongsTo('hike', {async: true})
});
