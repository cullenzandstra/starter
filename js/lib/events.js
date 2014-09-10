/*global define, window*/
define([
    "lib/backbone",
    "lib/underscore"
], function (Backbone, _) {
    "use strict";
    return _.extend({}, Backbone.Events, {
        triggerAsync : function () {
            var self = this, args = arguments;
            window.setTimeout(function () {
                self.trigger.apply(self, args);
            }, 0);
        }
    });
});