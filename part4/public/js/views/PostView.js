var PostView = Backbone.View.extend({
    tagName: 'article',
    className: 'page-posts',
    template: $('#post-template').html(),

    events: {
        "click .remove-button": "removePost"
    },

    initialize: function() {

        _.bindAll(this, 'render', 'removePost', 'remove');

        this.model.on("change", this.render);
        this.model.on("destroy", this.remove);
    },

    render: function() {
        var viewContent = Mustache.to_html(this.template, this.model.toJSON());
        this.$el.html(viewContent);
        return this;
    },

    removePost: function() {
        this.model.destroy();
    }
});