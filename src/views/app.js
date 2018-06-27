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
    var videoPlayer = new VideoPlayerView({el: '.player', model: this.videos.at(0)});
    var videoList = new VideoListView({el: '.list', collection: this.videos});
    var searchBar = new SearchView();
    videoPlayer.render();
    videoList.render();
    searchBar.render();
    return this;
    //
  },

  template: templateURL('src/templates/app.html')

});
