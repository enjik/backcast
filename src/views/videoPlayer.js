var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'select', this.refresh);
  },

  refresh: function(select) {
    console.log(select);
    this.model = select;
    this.render();
  },
  //el: '.player',
  render: function() {

    this.$el.html(this.template(this.model.attributes));
    //console.log(this.model);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
