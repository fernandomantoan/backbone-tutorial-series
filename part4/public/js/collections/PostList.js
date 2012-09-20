var PostList = Backbone.Collection.extend({
    model: PostModel,
    url: '/posts',
    comparator: function(post) {
       -post.get('id');
    }
});

var Posts = new PostList();