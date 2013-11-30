var AppRouter = Backbone.Router.extend({
    routes: {
        "": "listAction",
        "post/:id": "viewAction"
    },
    initialize: function() {
    	if (!this.header) {
            this.header = new HeaderView();
            $('#content').before(this.header.render().el);
        }
    },
    listAction: function() {
        $('#content').html('');

        this.header.showControls();

        this.appView = new AppView();

        Posts.bind('add', this.appView.addPost);
        Posts.bind('sync', this.appView.render);

        Posts.fetch();
    },
    viewAction: function(id) {
        var lastPost = new PostReaded();
        lastPost.fetch();
        lastPost.set({"post_id":id});
        lastPost.save();
        this.header.hideControls();
        this.header.hideForm();
        $('#content').html('');
        var post = new PostModel({
            id: id
        });
        post.fetch({
            success: function(postFetched) {
                var postView = new PostView({
                    model: postFetched
                });
                postView.render();
                $('#content').html(postView.el);
            }
        });
    }
});

var router = new AppRouter();
Backbone.history.start({pushState: true});
