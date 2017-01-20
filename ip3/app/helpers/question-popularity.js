import Ember from 'ember';

export function questionPopularity(params) {
  var answers = params[0];

  if (answers.get('length') === 0) {
    return Ember.String.htmlSafe('<br><b>Nobody has answered this question yet! :-(</b>');
  }
}

export default Ember.Helper.helper(questionPopularity);
