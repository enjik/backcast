var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // this.videoPlayer = new VideoPlayerView({el: '.player'});
    // this.videoList = new VideoListView({el: '.list',collection: this.videos});
    //
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    var videoPlayer = new VideoPlayerView({el: '.player'});
    var videoList = new VideoListView({el: '.list',collection: this.videos});


  //  this.collection.on('change', this.videoList.render(), this);
    videoPlayer.render();
    videoList.render();
    return this;
    //
  },

  template: templateURL('src/templates/app.html')

});
