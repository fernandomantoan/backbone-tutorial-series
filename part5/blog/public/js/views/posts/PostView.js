var PostView = Backbone.View.extend({
    tagName: 'article',
    className: 'page-posts',
    template: $('#post-template').html(),
    events: {
        "click .remove-button": "removePost",
        "click .view-button": "showPost"
    },
    initialize: function() {
        _.bindAll(this, 'render', 'removePost', 'remove');
        this.model.on("change", this.render);
        this.model.on("destroy", this.remove);
    },
    showPost: function(e) {
        router.navigate($(e.currentTarget).attr('href'), {trigger: true});
        e.preventDefault();
    },
    render: function() {
        var viewContent = Mustache.to_html(this.template, this.model.toJSON());
        this.$el.html(viewContent);
        if (this.model.isReaded()) {
            this.$el.find('h2').addClass('readed');
        }
        return this;
    },
    removePost: function(e) {
        e.preventDefault();
        if (window.confirm('Do you relly want to remove this post?')) {
            this.model.destroy({
                wait: true,
                success: function(model, response, options) {
                    window.alert('Post removed successfully!');
                    router.navigate("/", {trigger: true});
                }
            });
        }
    }
});
