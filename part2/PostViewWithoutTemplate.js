var PostView = Backbone.View.extend({
    tagName: 'article',
    className: 'page-posts',
    render: function() {
        var htmlGenerated = "<h2>Nome do Post</h2>";
        htmlGenerated += "<p>Conteudo do post</p>";
        this.$el.html(htmlGenerated); //Shortcut to $(this.el).html(htmlGenerated);
    }
});

var postView = new PostView();
postView.render();
console.log(postView.el);