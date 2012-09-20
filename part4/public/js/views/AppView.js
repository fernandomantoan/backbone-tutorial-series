var AppView = Backbone.View.extend({
    el: $('#content'),

    initialize: function() {

        _.bindAll(this, 'render', 'addAll', 'addPost', 'showForm');

        Posts.bind('add', this.addPost);
        Posts.bind('reset', this.addAll);
        Posts.bind('sync', this.render);
        Posts.fetch();

        $('.add-button').on('click', this.showForm);

        this.form = new PostFormView();
        this.form.render();
        $('header').append(this.form.el);
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