var PostView = Backbone.View.extend({
    tagName: 'article',
    className: 'page-posts',
    template: _.template("<h2><%= title %></h2><p><%= content %></p>"),

    events: {
        "dblclick" : "fullScreen",
        "click #add-button" : "newPost",
        "blur #username" : "searchUsername"
    },

    render: function() {
        this.$el.html(this.template({title: "Nome do Post", content: "Conteudo do Post"}));
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

var postView = new PostView();
postView.render();
console.log(postView.el);