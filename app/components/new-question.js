import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    questionFormHide() {
      this.set('addNewQuestion', false);
    },

    save() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        subject: this.get('subject') ? this.get('subject') : "",
        body: this.get('body') ? this.get('body') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
