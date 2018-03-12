import * as rec from "./records";
import * as rew from "./review";
import * as sha from "./share";

const bases = [ rec, rew, sha ];
const dialogs = {};

export function init(grid){
	for (let i = 0; i < bases.length; i++){
		dialogs[bases[i].action] = new bases[i].DialogBox(grid);
	}
}

export function open(action:string){
	const box = dialogs[action];
	if (box){
		box.open();
	}
}