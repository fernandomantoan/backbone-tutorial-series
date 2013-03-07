// Backbone.Router
var AppRouter = Backbone.Router.extend({
    initialize: function(options) {
    	this.route("posts/*ids", "multiple", function (ids) {
	    	console.log("Fetching posts " + ids);
	    });
    },

    routes: {
        "add" : "callback",
        "help" : "helpCallback",
        "posts/:id" : "postsCallback"
    },

    callback: function() {
    	console.log("add callback");
    },

    helpCallback: function() {
    	console.log("help callback");
    },

    postsCallback: function (id) {
    	console.log("Fetching post " + id);
    }
});

var router = new AppRouter();

// Router events
router.on("route:callback", function() {
	console.log("Add route event");
})

// History
if (Backbone.history.start()) {
	console.log("Matched the current URL");
} else {
	console.log("Current URL not matched by History");
}