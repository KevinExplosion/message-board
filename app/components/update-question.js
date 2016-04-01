import Ember from 'ember';

export default Ember.Component.extend({
  UpdateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    questionFormHide() {
      this.set('updateQuestionForm', false);
    },
    update(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        subject: this.get('subject'),
        body: this.get('body'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
