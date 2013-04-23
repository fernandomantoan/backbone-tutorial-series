var PostFormView = Backbone.View.extend({
    tagName: 'form',
    className: 'page-form',
    id: 'post-form',
    attributes: {
        action: 'posts',
        method: 'POST'
    },
    events: {
        "submit": "savePost"
    },

    initialize: function(model) {
        this.template = $('#post-form').html();
    },

    render: function() {
        var rendered = Mustache.to_html(this.template);
        this.$el.html(rendered);

        this.titleInput = this.$el.find('#post-title');
        this.textInput = this.$el.find('#post-text');
        return this;
    },

    savePost: function(e) {
        e.preventDefault();

        this.model = new PostModel();

        var title = this.titleInput.val();
        var text = this.textInput.val();

        this.model.set({
            title: title,
            text: text
        });

        Posts.create(this.model, {wait: true});
        Posts.sort();
    }
});