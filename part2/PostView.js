var PostView = Backbone.View.extend({
    tagName: 'article',
    className: 'page-posts',
    template: _.template('<a href="#" id="add-button">Add Post</a><h2><%= title %></h2><p><%= content %></p><h3>Comments</h3><label>Username: <input id="username" type="text" /></label>'),
    events: {
        "dblclick" : "fullScreen",
        "click #add-button" : "newPost",
        "blur #username" : "searchUsername"
    },
    render: function() {
        this.$el.html(this.template({title: "Nome do Post", content: "Conteúdo do Post"}));
    },

    newPost: function() {
        window.alert("Adicionar novo post");
    },

    searchUsername: function(e) {
        window.alert("Searching username " + e.target.value);
    },

    fullScreen: function() {
        window.alert("Post full screen");
    }
});