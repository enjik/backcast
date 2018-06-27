var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'select', this.render)
  },
  //el: '.player',
  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
