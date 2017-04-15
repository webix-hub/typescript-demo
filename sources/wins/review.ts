import {Dialog} from "./base";

export const action = "rating";

export class DialogBox extends Dialog{
	init(){
		return {
			view: "window",
			position:"center",
			head:"Send review",
			move: true,
			modal:true,
			width:500,
			body:{
				view:"form", 
				elements:[
					{ view:"textarea", name:"review", label:"Review", labelPosition:"top"},
					this.getButtons("Send", "Cancel")
				],
				rules:{
					review:webix.rules.isNotEmpty
				}
			}
		};
	}
	onshow(){
		(<webix.ui.text>this.form["elements"].review).focus();
	}
	apply(){
		if(this.form.validate()){
			webix.alert("Your review has been submitted", function(){});
			this.close();
		}
	}
}