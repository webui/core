WebUI core
====

**WebUI core** - base component to dynamic load and create instance of WebUI components.

**WebUI** - set of HTML components with OOP approach. You can create any HTML component with easy
interface to react on their actions. In case, when you change HTML structure, you don't need to change
anything in WebUI component, because you work with direct elements and don't use jQuery selectors to
find element in whole document. You can move element around, but you still have pointer to all elements
in this component!

Yes, we use **jQuery** to simplify our life.

### Examples

You can dynamical load any component of WebUI and create their instance in this way:
 * ``$webui.button( {...initial options...} )`` - create instance of WebUI.Button
 * ``$webui.search( {...initial options...} )`` - create instance of WebUI.Search
 * ``$webui.dropdown( {...initial options...} )`` - create instance of WebUI.Dropdown
 * etc...
