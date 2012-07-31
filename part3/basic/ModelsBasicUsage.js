var PostModel = Backbone.Model.extend({});

var post = new PostModel({
    title: 'Primeiro Post',
    text: 'Conteúdo do post'
});

console.log(post.get('title')); // Primeiro Post
console.log(post.get('text')); // Conteúdo do Post
post.set({text: 'Novo conteúdo'});
console.log(post.get('text')); // Novo conteúdo

// XSS
post.set({
    title: '<h1>HTML</h1>',
    text: '<h2><script>alert("xss");</script></h2>'
});

console.log(post.escape('text')); // &lt;h2&gt;&lt;script&gt;alert(&quot;xss&quot;);&lt;&#x2F;script&gt;&lt;&#x2F;h2&gt;

// has, unset, clear
if (post.has('title')) {
    post.unset('title');
}
console.log(post.get('title')); // undefined
post.clear();
console.log(post.get('text')); // undefined


// Defaults
var PostModel = Backbone.Model.extend({
    defaults: {
        title: "",
        text: ""
    }
});
var post = new PostModel();
console.log(post.get('title')); //
var post = new PostModel({title: 'Meu Post'});
console.log(post.get('title')); // Meu Post
console.log(post.get('text')); //

// toJSON
var post = new PostModel({title: "Primeiro Post"});
post.set({text: "conteudo"});
alert(JSON.stringify(post));

// id, cid, idAttribute
console.log(post.id); // undefined

var PostModel = Backbone.Model.extend({
    idAttribute: 'timestamp'
});

var post = new PostModel({timestamp: '201201'});
console.log('Id: ' + post.id); // Id: 201201
console.log('Timestamp: ' + post.get('timestamp')); // Timestamp: 201201
console.log('CID: ' + post.cid); // CID: c4