/*interface IconCheck extends webix.ui.checkbox{
	getIconLabel(icon:string, label:string):string;
}

webix.protoUI({
	name:"iconcheck",
	$init:function(config){
		//config.label  = (<IconCheck>webix.$$(this)).getIconLabel(config.icon, config.label);
		config.labelWidth = 100;
	},
	getIconLabel:function(icon, label){
		//return "<span class='webix_icon fa-"+icon+"'></span>"+label;
		return true;
	}
}, webix.ui.checkbox);
*/

interface IconCheckConfig extends webix.ui.checkboxConfig{
	icon?:string;
}

interface IconCheckApi{
	name:string;
	$init(config:IconCheckConfig):void;
	getIconLabel(icon:string, label:string):string;
}

interface IconCheckView extends webix.ui.checkbox, IconCheckApi {}

const api:IconCheckApi = {
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
