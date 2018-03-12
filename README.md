Webix + TypeScript Demo Application
=========

### How to start

How to run standalone

```
npm install
npm run server
```

After that, open http://localhost:8080 in the browser.

How to run with Apache

```
npm install
npm run watch
```

How to build codebase

```
npm install
npm run codebase
```

Note that latest versions of node.js and npm should be installed.

### Typing within Webix widgets

You need to explicitely set the type of a Webix widget during initialization as **webix.ui.{widget}**: 

~~~js
const layout = <webix.ui.layout> webix.ui({
	rows:[ toolbar, datatable, pager] 
});
~~~

And for using its methods and events after initialization: 

~~~js
const grid:webix.ui.datatable = layout.getChildViews()[1];
grid.add({ title:"New film"}, 0);

//or

const grid = (<webix.ui.datatable>layout.getChildViews()[1]);
grid.add({ title:"New film"}, 0);
~~~

Or, when accessing  the widget by its id: 

~~~
(<webix.ui.datatable>webix.$$("mygrid")).add({ title:"New film"}, 0);
~~~

You also need to set a widget type during attaching handler functions to a widget's events:

~~~js
const grid:webix.ui.datatable = layout.getChildViews()[1];
grid.attachEvent("onAfterSelect", function(){...});
~~~ 

### Typing for widgets' configuration

You can provide the correct types for widgets' properties with the related **webix.ui.config{Widget}** types: 

~~~js
const datatable:webix.ui.datatableConfig = {
	view:"datatable",
	editable:true,
	editaction:"dblclick",
	autoConfig:true,
	url:"..",
	pager:"pagerA",
	scrollX:false
};

const pager:webix.ui.pagerConfig = {
	view:"pager",
	id:"pagerA",
	group:10,
	size:30
}; 

const layout = <webix.ui.layout> webix.ui({
	rows:[ datatable, pager] 
}); 
~~~

### Creating a custom widget with strict typing

Adding a custom property to configuration:

~~~js
interface IconCheckConfig extends webix.ui.checkboxConfig{
	icon?:string;
}
~~~

Adding or overriding methods and properties in the prototype:

~~~js
interface IconCheckApi{
	name:string;
	$init(config:IconCheckConfig):void;
	getIconLabel(icon:string, label:string):string;
}

interface IconCheckView extends webix.ui.checkbox, IconCheckApi {}
~~~


Creating a new proto UI:

~~~js
const api:IconCheck = { 
name:"iconcheck",
	$init:function(config){
		config.label = (<IconCheckView>this).getIconLabel(config.icon, config.label);
		config.labelWidth = 100;
	},
	getIconLabel:function(icon, label){
		return "<span class='webix_icon fa-"+icon+"'></span>"+label;
	}
};

webix.protoUI(api, webix.ui.checkbox);
~~~

Using the custom widget: 

~~~js
const iconcheckbox = <IconCheckView> webix.ui({
	view:"iconcheck",
	icon:"cog",
	label:"Settings"
});
~~~









