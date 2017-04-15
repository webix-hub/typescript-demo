import * as rec from "./records";
import * as rew from "./review";
import * as sha from "./share";

var bases = [ rec, rew, sha ];
var dialogs = {};

export function init(grid){
	for (var i = 0; i < bases.length; i++)
		dialogs[bases[i].action] = new bases[i].DialogBox(grid);
}

export function open(action:string){
	var box = dialogs[action];
	if (box) box.open();
}