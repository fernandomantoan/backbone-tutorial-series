Backbone.$ = jQuery.noConflict();

// Main Backbone does not use Zepto, will return an error because "pluck" is present on Zepto API
try {
	console.log(Backbone.$('body > *').pluck('nodeName'));
} catch (error) {
	console.log(error);
}

var localBackbone = Backbone.noConflict();
var localBackboneModel = localBackbone.Model.extend({});

// The localBackbone will use Zepto
localBackbone.$ = Zepto;
console.log(localBackbone.$('body > *').pluck('nodeName'));