/*
 * WebUI core.
 *
 * @url https://github.com/webui/core
 */

$webui || $webui = {
    extend: function(name, functions) {
        this[name] = functions.init || function() {};
        this[name].prototype = functions;
    },
    load: function(component_name) {},
    // WebUI components
    button: function(options) { return new this.Button(options); },
    dropdown: function(options) { return new this.Dropdown(options); },
    search: function(options) { return new this.Search(options); }
};
