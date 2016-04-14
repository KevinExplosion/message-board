import Ember from 'ember';

export default Ember.Component.extend({
  isBodyShowing: false,

  fullQuestionTitle: Ember.computed('question.title', 'question.author', function() {
    return this.get('question.title') + ', by: ' + this.get('question.author');
  }),
  
  actions: {
    delete(question) {
      if(confirm('Would you like to delete this question from the board?')){
        this.sendAction('destroyQuestion', question);
      }
    },

    saveAnswer(answer, params) {
      this.sendAction('saveAnswer', answer, params);
    },

    update(question, params) {
      this.sendAction('update', question, params);
    },
    bodyShow: function() {
      this.set('isBodyShowing', true);
    },
    bodyHide: function() {
      this.set('isBodyShowing', false);
    }
  }
});
