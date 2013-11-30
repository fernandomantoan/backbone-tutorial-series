var AppView = Backbone.View.extend({
    el: $('#content'),
    initialize: function() {
        _.bindAll(this, 'render', 'addAll', 'addPost', 'showForm');
    },
    render: function() {
        this.$el.empty();
        this.addAll();
    },
    addPost: function(post) {
        var view = new PostView({
            model: post
        });
        this.$el.append(view.render().el);
    },
    addAll: function() {
        Posts.each(this.addPost);
    },
    showForm: function() {
        this.form.show();
    }
});
