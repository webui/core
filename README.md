WebUI core
====

**WebUI core** - base component to dynamic load and create instance of [WebUI components](https://github.com/webui/).

**WebUI** - set of HTML/JS/CSS components with [OOP](http://en.wikipedia.org/wiki/Object-oriented_programming) approach.
You can create instance of component, set options and set callbacks on actions. In case, when you change HTML structure,
you don't need to change anything in WebUI component, because you work with direct elements and don't use jQuery selectors to
find element in whole document. You can move element around, and you still have pointer to all elements
in this component!

Yes, we use **backbone.js** (and jQuery under the hood) to simplify our life.


### List of all WebUI components

You can dynamical load any WebUI component (with all dependencies) and create their instance in this way:

```javascript
var button1 = $webui.create('button', {...options...});

$('html').append(button1.render().el);
```

#### Simple elements

This list of standard HTML UI components, but extended with some new elements with additional logic.
When some browsers hasn't support of standard UI element (like ``<input type="search">``) - you can use
WebUI elements to be sure that all work well.

 * ``button`` - button
 * ``input`` - input field (can be: search, password, date, datetime, ...)
 * ``select`` - in addition to default behaviour can be filtered with user input and dynamic data loading

#### Complex elements

 * ``list_view`` - scrolable list of elements with dynamic loading at up and bottom. Horizontal or vertical scrolling
 * ``rating`` - can be used to select stars from list of
 * ``comments`` - based on ``list_view``
 * ``popup`` - extended HTML alert
