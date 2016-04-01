import Ember from 'ember';

export default Ember.Component.extend({
  isBodyShowing: false,
  actions: {
    delete(question) {
      if(confirm('Would you like to delete this question from the board?')){
        this.sendAction('destroyQuestion', question);
      }
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
