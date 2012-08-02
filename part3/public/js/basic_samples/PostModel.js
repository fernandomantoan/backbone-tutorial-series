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

var post = new PostModel();
post.on('change', function() {
    console.log('O evento change foi disparado');
});
post.on('sync', function() {
    console.log('O evento sync foi disparado');
});
post.set({
    title: "Um titulo",
    text: "Um texto "
}); // Dispara change
post.fetch(); // Dispara change e sync


var post = new PostModel();
post.on('change', function() {
    if (post.hasChanged('title'))
        console.log('o atributo titulo foi alterado');
    else
        console.log('o atributo titulo não foi alterado');
});
post.set({
    title: 'Evento manual',
    text: 'Texto'
}, {
    silent: true
});
post.change();

var post = new PostModel({
    title: 'Valor antigo',
    text: 'Texto antigo'
});

post.on('change', function() {
    if (post.hasChanged('title')) {
        console.log('o atributo titulo foi alterado');
        console.log(post.previous('title'));
        console.log(post.get('title'));
    }
});
post.set({title: 'Novo valor'});
post.change();


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

var post = new PostModel();
post.on('error', function(model, error) {
    alert(error);
});
post.save();

var post = new PostModel();
post.on('error', function(model, error) {
    if (!model.isValid())
        alert('Erro de validação: ' + error);
    else
        alert(error);
});
post.save();