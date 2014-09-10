define([
	"lib/backbone",
	"lib/jquery",
	"lib/underscore",
	"text!templates/tpl-main.html", 
	"models/mainModel",
], function(Backbone, 
			$, 
			_, 
			Template, 
			mainModel) {
	return Backbone.View.extend({
		el : $('body'),
        events   : {
            'click #loadDropbox' : 'loadDropbox',
        },

		initialize : function () {
			$("body").append(Template);
        },
	});
});