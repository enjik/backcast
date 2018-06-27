var Videos = Backbone.Collection.extend({
  model: Video,

  //test: console.log(window.exampleVideoData)
  initialize: function(data) {
    var videoArray = [];
    _.each(data, function(video) {
      var vid = new Video(video);
      videoArray.push(vid);
    });
    this.add(videoArray);
    //console.log(this);
    return this;
  }
});
