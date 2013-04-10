var AppRouter = Backbone.Router.extend({
	routes: {
		"": "listAction",
		"add": "addAction",
		":id": "viewAction",
		"edit/:id": "editAction"
	},
	listAction: function() {
		console.log("Liting posts...");
	},
	addAction: function() {
		console.log("Adding post...");
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