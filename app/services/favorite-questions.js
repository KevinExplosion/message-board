import Ember from 'ember';

export default Ember.Service.extend({
  posts: [],

  add(post) {
    this.get('posts').pushObject(post);
  }
});
