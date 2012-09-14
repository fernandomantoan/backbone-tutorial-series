var AppView = Backbone.View.extend({
    initialize: function() {

        _.bindAll(this, 'render', 'addAll', 'addPost');

        this.el = $('#content');

        Posts.bind('add', this.addPost);
        Posts.bind('reset', this.addAll);
        Posts.bind('all', this.render);
        Posts.fetch();
    },

    addPost: function(post) {
        var view = new PostView({
            model: post
        });
        this.el.append(view.render().el);
    },

    addAll: function() {
        Posts.each(this.addPost);
    }
});