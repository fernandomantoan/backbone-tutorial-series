var AppRouter = Backbone.Router.extend({
	routes: {
		"": "listAction",
		"add": "addAction",
		":id": "viewAction",
		"edit/:id": "editAction"
	},
	listAction: function() {

		_.bindAll(this, 'addPost');

		this.layout = new LayoutView();
		this.layout.router = this;
		this.layout.render();

		Posts.bind('add', this.addPost);
		Posts.fetch();
	},
	addAction: function() {
		var form = new PostFormView();
		form.router = this;
		form.render();
		$('#main').append(form.$el);
	},
	addPost: function(post) {
		 var view = new PostView({
            model: post
        });
        this.layout.$el.append(view.render().el);
	},
	viewAction: function(id) {
		console.log("Viewing post with id " + id + "...");
	},
	editAction: function(id) {
		console.log("Editing post with id " + id + "...");
	}
});

var router = new AppRouter();
Backbone.history.start({pushState: true});