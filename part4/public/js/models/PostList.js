var PostList = Backbone.Collection.extend({
    model: PostModel,
    url: '/posts'
});

var Posts = new PostList();