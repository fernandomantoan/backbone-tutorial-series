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
        _.bindAll(this, 'render', 'savePost', 'goToIndex');

        this.template = $('#post-form').html();
        this.model = new PostModel();

        this.model.on("error", this.showError);
        this.model.on("sync", this.goToIndex);
        this.render();
    },

    render: function() {
        var rendered = Mustache.to_html(this.template);
        this.$el.html(rendered);

        this.titleInput = this.$el.find('#post-title');
        this.textInput = this.$el.find('#post-text');

        $('body').append(this.el);
    },

    savePost: function(e) {
        e.preventDefault();

        var title = this.titleInput.val();
        var text = this.textInput.val();

        this.model.set({
            title: title,
            text: text
        });

        if (this.model.isValid())
            this.model.save();
    },

    showError:function(model, error) {
        window.alert('Ocorreu um erro, motivo: ' + error);
    },

    goToIndex: function() {
        window.location = 'index.html';
    }
});