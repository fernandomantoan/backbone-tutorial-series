var Post = Backbone.Model.extend({});
var PostList = Backbone.Collection.extend({
    url: "/posts",
    model: Post
});

var posts = new PostList();
posts.add({
    id: 1,
    title: "Meu post",
    text: "Conteudo"
});

// showing how the url attribute is used by Models
var post = posts.get(1);
console.log(post.url());
post.save();

// fetch()
posts.on("reset", function() {
    console.log("Collection zerada");
});
posts.fetch({
    success: function(collection, response) {
        console.log("A resposta foi: " + response);
    }
});

// just append the server data, without reseting
posts.on("reset", function() {
    console.log("Este método nunca será chamado pelo fetch com add true");
});
posts.fetch({
    add: true,
    success: function(collection, response) {
        console.log("A resposta foi: " + response);
    }
});

// jquery.ajax API
posts.fetch({data: {page: 3}});

// clear the collection
posts.reset();

// parse()
var PostsWithRoot = Backbone.Collection.extend({
    // A resposta é no formato {posts: []}
    parse: function(response) {
        return response.posts;
    }
});

// create()
var Posts = Backbone.Collection.extend({
    url: "/posts",
    model: Post
});

var posts = new Posts();

var newPost = new Post({
    title: "Título do novo post",
    text: "Conteúdo do novo post"
});

posts.create(newPost);