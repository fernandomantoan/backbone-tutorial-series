var PostFormView = Backbone.View.extend({
    tagName: 'form',
    className: 'page-form',
    id: 'post-form',
    attributes: {
        action: 'posts',
        method: 'POST'
    },
    events: {
        "submit" : "savePost"
    },

    initialize: function(model) {
        _.bindAll(this, 'render', 'savePost');

        this.template = $('#post-form').html();
    },

    render: function() {
        var rendered = Mustache.to_html(this.template);
        this.$el.html(rendered);

        this.titleInput = this.$el.find('#post-title');
        this.textInput = this.$el.find('#post-text');

        this.hide();
    },

    savePost: function(e) {
        e.preventDefault();

        this.model = new PostModel();
        this.model.on("error", this.showError);

        var title = this.titleInput.val();
        var text = this.textInput.val();

        this.model.set({
            title: title,
            text: text
        });

        if (this.model.isValid()) {
            Posts.create(this.model, {wait: true});
            this.hide();
            Posts.sort();
        }
    },

    hide: function() {
        this.$el.hide();
    },

    show: function() {
        this.titleInput.val('');
        this.textInput.val('');
        this.$el.toggle();
    },

    showError:function(model, error) {
        window.alert('Ocorreu um erro, motivo: ' + error);
    },
});