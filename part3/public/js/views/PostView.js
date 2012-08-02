var PostView = Backbone.View.extend({
    tagName: 'article',
    className: 'page-posts',
    events: {
        "click #remove-button": "removePost"
    },

    initialize: function() {
        _.bindAll(this, 'render', 'removePost', 'refresh');

        this.template = $('#post-template').html();

        this.model = new PostModel();

        this.model.on("change", this.render);
        this.model.on("destroy", this.refresh);
        this.model.fetch();
    },

    render: function() {
        console.log("Rendering...");
        var rendered = Mustache.to_html(this.template, this.model.toJSON());
        this.$el.html(rendered);
        $('body').append(this.el);
    },

    removePost: function() {
        this.model.destroy();
    },

    refresh: function() {
        this.model.clear({silent: true});
        this.model.fetch();
    }
});