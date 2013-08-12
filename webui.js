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


/*
// How to create WebUI component.
// In this example we create simple WebUI.Button

$webui.extend('Button', {

    init: function(options) {
        console.log('y6y5y5t', this);
        var defaults = {
            text: 'Button',
            help_text: null
        };
        this.options = $.extend(defaults, options);

        this.element = $('<button type="button" class="webui button"></button>');
        this.set_text(this.options.text);
    },

    set_text: function(text) {
        this.element.text(text);
        return this;
    }

});
*/
