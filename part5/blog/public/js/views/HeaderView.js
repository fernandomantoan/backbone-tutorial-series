var HeaderView = Backbone.View.extend({
    tagName: 'header',
    className: 'site-header',
    template: $('#header').html(),
    events: {
        'click #new-post': 'addButtonClick'
    },
    initialize: function() {
        _.bindAll(this, 'render', 'addButtonClick', 'showForm', 'hideForm', 'showControls', 'hideControls');
    },
    render: function() {
        var viewContent = Mustache.to_html(this.template);
        this.$el.html(viewContent);
        return this;
    },
    hideControls: function() {
        this.$el.find('.toolbar').hide();
    },
    showControls: function() {
        this.$el.find('.toolbar').show();
    },
    addButtonClick: function(e) {
        if (this.form == null) {
            this.showForm();
        } else {
            this.hideForm();
        }
        e.preventDefault();
    },
    showForm: function() {
        this.form = new PostFormView();
        this.form.on("form:hide", this.hideForm, this);
        this.form.render();
        this.$el.append(this.form.el);
    },
    hideForm: function() {
        if (this.form != null) {
            this.form.remove();
            this.form = null;
        }
    }
});
