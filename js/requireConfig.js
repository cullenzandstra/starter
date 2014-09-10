require.config({
	baseUrl : "js",
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
	}
});

require(["lib/jquery", 
		 "views/main", 
		 "lib/underscore", 
], function($, Main, _){
	var main = new Main(); 
})
