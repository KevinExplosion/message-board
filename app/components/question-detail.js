import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  actions: {
    delete(question) {
      if (confirm('Would you like to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    saveAnswer(answer) {
      this.sendAction('saveAnswer', answer);
    }
  }
});
