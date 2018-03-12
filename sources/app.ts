import * as wins from "./wins/index";
import "./less/app.less";

class App {
	init(): void {
		const layout:webix.ui.layout = this.createLayout();
		const grid:webix.ui.datatable = layout.getChildViews()[1];
		this.createDialogs(grid);
	}
	createLayout():webix.ui.layout {

		const datatable:webix.ui.datatableConfig = {
			view:"datatable",
			id:"filmsdata",
			editable:true,
			editaction:"dblclick",
			autoConfig:true,
			url:"sources/server/films.json",
			pager:"pagerA",
			scrollX:false
		};

		const pager:webix.ui.pagerConfig = {
			view:"pager", id:"pagerA",
			group:10, size:30
		};

		return <webix.ui.layout> webix.ui({
			padding:50,
			width:800,
			height:590,
			type:"space",
			rows:[
				{ view:"toolbar", cols:[
					{ view:"label", label:"Film Collection"},
					{},
					{
						view:"button", type:"iconButton",
						icon:"plus", label:"Add new film", autowidth:true,
						click: () => this.openDialog("record")
					},
					{
						view:"button", type:"iconButton",
						icon:"star", label:"Rate film", autowidth:true,
						click: () => this.openDialog("rating")
					},
					{
						view:"button", type:"iconButton",
						icon:"share", label:"Share film", autowidth:true,
						click: () => this.openDialog("share")
					}
				]},
				datatable,
				pager
			]
		});
	}
	createDialogs(grid:webix.ui.datatable): void {
		wins.init(grid);
	}
	openDialog(action:string):void {
		wins.open(action);
	}
}

const app = new App();
app.init();

