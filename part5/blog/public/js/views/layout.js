var LayoutView = Backbone.View.extend({
	el: $('#main'),
	template: $('#header').html(),
	events: {
		"click #new-post": "newpost"
	},
	newpost: function() {
		console.log(router);
		router.navigate('add', {trigger: true});
		return false;
	},
	render: function() {
		this.$el.html(this.template);
		return this;
	}
});