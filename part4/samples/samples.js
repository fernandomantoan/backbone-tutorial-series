// basic
var Posts = Backbone.Collection.extend({
    model: PostModel
});

// toJSON
var myPosts = new Posts([
    {title: "Post um", text: "Conteúdo do Post um"},
    {title: "Post dois", text: "Conteúdo do Post dois"},
    {title: "Post três", text: "Conteúdo do Post três"},
]);
console.log(JSON.stringify(myPosts));

// add()
var posts = new Posts();
posts.on("add", function(model, collection, options) {
    console.log("O model " + model.get('title') + " foi adicionado na posição " + options.index);
});
posts.add([
    {title: "Post um", text: "Conteúdo do post um"},
    {title: "Post dois", text: "Conteúdo do post dois"}
]);

posts.add({
    title: "Post tres", text: "Post tres"
}, {
    at: 0
});

// remove()
var posts = new Posts();
posts.on("remove", function(model, collection, options) {
    console.log("O model " + model.get('title') + " foi removido da posição " + options.index);
});
var models = [
    {
        id: 1, title: "Post um", text: "Conteúdo do post um"
    },
    {
        id: 2, title: "Post dois", text: "Conteúdo do post dois"
    }
];
posts.add(models);
posts.remove({id: 1});

// get()
var post = posts.get(2);
console.log(JSON.stringify(post));

// getByCid()
posts.add({title: "Post um", text: "Conteúdo do post um"});
var post = posts.getByCid('c8');
console.log(JSON.stringify(post));

// at()
var post = posts.at(0);
console.log(JSON.stringify(post));

// push()
posts.push({title: "Novo post", text: "Post adicionado"});

// pop()
console.log(posts.length);
postRemoved = posts.pop();
console.log(posts.length);
console.log(postRemoved.get('title'));

// unshift()
posts.unshift({title: "Novo post", text: "Post adicionado"});

// shift()
console.log(posts.length);
postRemoved = posts.shift();
console.log(posts.length);
console.log(postRemoved.get('title'));

// length
console.log("Existem " + posts.length + " postagens na coleção.");

// comparator sortBy()
var posts = new Backbone.Collection;
posts.comparator = function(post) {
    return post.get('username');
};
posts.add({title: "Postagem 1", text: "Minha postagem", username: "Fernando"});
posts.add({title: "Postagem 2", text: "Minha postagem 2", username: "Guest"});
posts.add({title: "Postagem 3", text: "Minha postagem 3", username: "Fernando"});

console.log(JSON.stringify(posts));

// comparator sort()
var orders = new Backbone.Collection;
orders.comparator = function(firstModel, secondModel) {
    if (firstModel.get('count') < secondModel.get('count'))
        return -1;
    else if (firstModel.get('count') > secondModel.get('count'))
        return 1;
    return 0;
};

orders.add({count: 1});
orders.add({count: 3});
orders.add({count: 2});
orders.add({count: 2});
orders.add({count: 5});
orders.add({count: 4});

console.log(JSON.stringify(orders));

// forcing sort()
var orders = new Backbone.Collection;
orders.comparator = function(firstModel, secondModel) {
    if (firstModel.get('count') < secondModel.get('count'))
        return -1;
    else if (firstModel.get('count') > secondModel.get('count'))
        return 1;
    return 0;
};
orders.add({count: 1});
orders.add({count: 3});
orders.add({count: 2});
orders.add({count: 2});
orders.add({count: 5});
orders.add({count: 4});
console.log(JSON.stringify(orders));
orders.on("reset", function() {
    console.log("Collection reseted");
});
orders.sort();

// pluck()
var users = posts.pluck('username');
console.log("The users of the blog are: " + JSON.stringify(users));

// where()
var guestPosts = posts.where({username: 'Guest'});
console.log("The guest posts are: " + JSON.stringify(guestPosts));