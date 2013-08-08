var PostReaded = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage("PostReaded"),
    defaults: {
        id: 1,
        post_id: ''
    }
});
