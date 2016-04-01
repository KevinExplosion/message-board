import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('questions'),
      answers: this.store.findAll('answers')
    });
  },

  actions: {
    save(params) {
      var newQuestion = this.store.createRecord('questions', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
