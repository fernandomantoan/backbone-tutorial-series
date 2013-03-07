// Uses the Events module
var object = {};

_.extend(object, Backbone.Events);

// Attach a simple event callback
object.on("myevent", function() {
	console.log("myevent was triggered");
});

// Trigger the custom event
object.trigger("myevent");

// This callback will receive an argument, it will be triggered with the other attached callback
callback = function(argument) {
    console.log("Event triggered with the argument: " + argument);
};

object.on("myevent", callback, this);

// This will be a callback to ALL events triggered
function globalCallback() {
	console.log("Global callback triggered");
}
object.on("all", globalCallback);

// Trigger two different events to show the use of the global callback
object.trigger("test");
object.trigger("myevent");

// Detach the globalcallback
// We could use off to detach the first callback from "myevent" also
object.off("all", globalCallback);

// Trigger an event with an argument
object.trigger("myevent", "argument");