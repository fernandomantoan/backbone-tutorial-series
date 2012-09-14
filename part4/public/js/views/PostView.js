var PostView = Backbone.View.extend({
    tagName: 'article',
    className: 'page-posts',

    initialize: function() {
        this.template = $('#post-template').html();
        this.model.on("change", this.render);
    },

    render: function() {
        var viewContent = Mustache.to_html(this.template, this.model.toJSON());
        this.$el.html(viewContent);
        return this;
    }
});