var PostModel = Backbone.Model.extend({
    urlRoot: '/posts',
    defaults: {
        title:'',
        text:''
    },
    isReaded: function() {
        var lastPost = new PostReaded();
        lastPost.fetch();
        return lastPost.get('post_id') == this.get('id');
    },
    validate: function(attrs) {
        if (attrs.title == '')
            return 'The title field is required';
        if (attrs.text == '')
            return 'The text field is required';
    }
});
