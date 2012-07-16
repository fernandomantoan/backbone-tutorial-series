var PostView = Backbone.View.extend({
    tagName: 'article',
    className: 'page-posts',
    template: _.template("<h2><%= title %></h2><p><%= content %></p>"),
    render: function() {
        this.$el.html(this.template({title: "Nome do Post", content: "Conteudo do Post"}));
    }
});

var postView = new PostView();
postView.render();
console.log(postView.el);