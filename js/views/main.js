define([
	"lib/backbone",
	"lib/jquery",
	"lib/underscore",
	"hbs!templates/tpl-main", 
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
			$("body").append(Template({test:"TODO"}));
        },
	});
});