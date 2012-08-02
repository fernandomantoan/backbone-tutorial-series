var PostModel = Backbone.Model.extend({
    urlRoot: 'posts',
    defaults: {
        title: "",
        text: ""
    },
    validate: function(attrs) {
        if (attrs.title == '')
            return 'O título é obrigatório';
        if (attrs.text == '')
            return 'O texto é obrigatório'
    }
});

post = new PostModel();

post.fetch();

post.fetch({
    success: function(model, response) {
        console.log(model.get('title'));
    },
    error: function(model, response) {
        window.alert('Ocorreu um erro');
    }
});

var post = new PostModel({
    title: "First Post",
    text: "Text of the post"
});
post.save();

var post = new PostModel({
    id: 1,
    title: "First Post",
    text: "Text of the post"
});
post.save();

var post = new PostModel();
// Obtém a última postagem
post.fetch({
    success: function(model, response) {
        // Será atualizado somente o atributo "title"
        post.save({
            title: "Atualizar o titulo"
        });
    }
});

var post = new PostModel({
    id: 1,
    title: "First Post",
    text: "Text of the post"
});
post.save(
    null,
    {
        success: function (model, response) {
            console.log(model.get('title'));
        },
        error: function (model, response) {
            window.alert('Ocorreu um erro');
        }
    }
);

var post = new PostModel({
    id: 1
});
post.destroy({
    success: function(model, response) {
        console.log('Postagem removida com sucesso');
    },
    error: function(model, response) {
        window.alert('Ocorreu um erro');
    }
});