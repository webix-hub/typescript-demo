import {Dialog} from "./base";

export const action = "share";

export class DialogBox extends Dialog{
	init(){
		return {
			view: "window",
			position:"center",
			head:"Share film",
			move: true,
			modal:true,
			width:500,
			body:{
				view:"form", 
				elements:[
					{ cols:[
						{ view:"iconcheck", name:"fb", icon:"facebook-square",label:"Facebook"},
						{ view:"iconcheck", name:"twitter", icon:"twitter", label:"Twitter"},
						{ view:"iconcheck", name:"gplus", icon:"google-plus", label:"Google +"}
					]},
					this.getButtons("Share", "Cancel")
				],
				rules:{
					$obj:function(obj){
						return obj.fb || obj.twitter || obj.gplus;
					}
				}
			}
		};
	}
	oninit(){
		this.form.attachEvent("onValidationError", function(){
			webix.message({text:"You should check at least 1 option", type:"error"});
		});
	}
	apply(){
		if(this.form.validate()){
			webix.alert("The film has been shared", function(){});
			this.close();
		}

	}
}