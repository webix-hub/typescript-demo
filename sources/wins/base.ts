export class Dialog{
	constructor(grid:webix.ui.datatable){
		this.grid = grid;
	}
	dialog:webix.ui.window;
	form:webix.ui.form;
	grid:webix.ui.datatable;

	init():void {}
	oninit():void {}
	apply():void {}
	onshow():void {}
	onhide():void {
		this.form.clear();
	}
	open():void{
		if(!this.dialog){
			this.dialog = <webix.ui.window> webix.ui(this.init());
			this.form = this.dialog.getBody();

			this.dialog.attachEvent("onHide", ()=>this.onhide());
			this.dialog.attachEvent("onShow", ()=>this.onshow());
			this.oninit();
		}
		this.dialog.show();
	}
	close():void{
		webix.UIManager.setFocus(this.grid.config.id);
		this.dialog.hide();
	}
	getButtons(ok:string, cancel:string):webix.ui.layoutConfig{
		return { cols:[
			{ view:"button", value:"Share", type:"form", click: () => this.apply() },
			{ view:"button", value:"Cancel", click: () => this.close()}
		]}
	}
}