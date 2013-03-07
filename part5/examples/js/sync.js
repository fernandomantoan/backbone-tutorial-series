// Override Backbone.sync
Backbone.sync = function(method, model, options) {
    if (method == 'create') {
        console.log('creating a new model...');
    } else {
        console.log('not creating, doing now a: ' + method);
    }
};

// Override Backbone.sync for all Models
Backbone.Model.prototype.sync = function(method, model, options) {
    console.log('Models call this sync method...');
};

// Emulate not supported HTTP methods and JSON HTTP Body
Backbone.emulateHTTP = true;
Backbone.emulateJSON = true;

// Make a request just to show the behavior
var PostModel = Backbone.Model.extend({});
var post = new PostModel({
    title: 'Title',
    content: 'Content'
});
post.save();
post.fetch({id: 1});