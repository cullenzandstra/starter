require.config({
	baseUrl : "js",
    paths : {
    'handlebars'          : './vendor/handlebars',
    'hbs'                 : './vendor/hbs'
    },
	shim:{
		"lib/jquery" : {
            exports : '$'
        },
        "lib/underscore" : {
            exports : '_'
        },
        "lib/backbone" : {
            deps    : ['require', 'lib/jquery', 'lib/underscore'],
            exports : 'Backbone'
        },
        'handlebars' : {
          exports : 'Handlebars'
        },
	},
    'hbs' : {
        helpers           : false,
        disableI18n       : true,
        disableHelpers    : true,
        i18n              : false,
        templateExtension : 'html',
        partialsUrl       : ''
      }
});

require(["lib/jquery", 
		 "views/main", 
		 "lib/underscore", 
], function($, Main, _){
	var main = new Main(); 
})
