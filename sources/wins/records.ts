import {Dialog} from "./base";

export const action = "record";

export class DialogBox extends Dialog{
	init(){
		return {
			view: "window",
			position:"center",
			head:"Add new film",
			move: true,
			modal:true,
			width:500,
			body:{
				view:"form",
				elements:[
					{ view:"text", name:"title", label:"Title"},
					{ view:"text", name:"year", label:"Year"},
					{ view:"text", name:"votes", label:"Votes"},
					{ view:"text", name:"rating", label:"rating"},
					this.getButtons("Add", "Cancel")
				],
				rules:{
					title: webix.rules.isNotEmpty
				}
			}
		};
	}
	onshow(){
		(<webix.ui.text>this.form.elements.title).focus();
	}

	apply(){
		if(this.form.validate()){
			const values = this.form.getValues();
			if(values.id){
				this.grid.updateItem(values.id,values);
			} else{
				const id = this.grid.add(values, 0);
				this.grid.showItem(id);
			}
			this.close();
		}
	}
}