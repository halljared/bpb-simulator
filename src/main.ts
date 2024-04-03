import { Context } from "@/Context";
import { Board } from "@/models/Board";
import { Player } from "@/models/Player";
import { Artifact } from "@/models/atrifacts/Artifact";
import { BuffArtifact } from "@/models/atrifacts/Buff";
import { AttributeType } from "@/models/attributes/AttributeTypes";
import { ScalarAttribute } from "@/models/attributes/ScalarAttribute";
import { Banana } from "@/models/items/Banana";
import { FlatModifier } from "@/models/modifiers/FlatModifier";
import { IncreaseModifier } from "@/models/modifiers/IncreaseModifier";
import { MoreModifier } from "@/models/modifiers/MoreModifier";
import { BuffType } from "@/models/utility/BuffTypes";
import { translateGridToText } from "@/models/utility/GridConfig";
import { filter } from "rxjs";

let banana = new Banana();
// console.log(translateGridToText(banana.gridConfig));
// banana.rotate();

let attr1 = new ScalarAttribute(10, AttributeType.COOLDOWN);
let mod1 = new IncreaseModifier(50);
let mod2 = new IncreaseModifier(50);
let mod3 = new MoreModifier(50);
let flat5 = new FlatModifier(5);
let mod5 = new FlatModifier(8);
attr1.addModifier(mod1);
attr1.addModifier(mod2);
attr1.addModifier(mod3);
attr1.addModifier(flat5);
attr1.addModifier(mod5);
banana.addAttribute(attr1);
const board = new Board();
const player1 = new Player(board);
const board2 = new Board();
const player2 = new Player(board2);
Context.initialize();
const context = new Context(player1, player2);
board.placeItem(banana);
player1.update(5, context);
Context.artifacts.subscribe((artifact) => {
  console.log('Receive: Artifact');
});
Context.buffs.subscribe((buff) => {
  console.log('Receive: Buff');
  buff.amount.addModifier(flat5);
})
const filtered = Context.artifacts.pipe(
  filter((val) => val.constructor == BuffArtifact)
);
filtered.subscribe((artifact) => {
  console.log('Receive: Filtered Artifact');
});
board.update(5, context);
