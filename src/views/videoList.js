var VideoListView = Backbone.View.extend({


  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  render: function() {
    //console.log(this)

    this.$el.children().detach();
    this.$el.html(this.template());
    that = this.$el;
    // var array = this.collection._map(function(video) {
    //   return new VideoListEntryView({model: video});
    // })
    this.collection.forEach(function(video) {
      var videoEntry = new VideoListEntryView({model: video});

      that.append(videoEntry.render());
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
