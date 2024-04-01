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
const player = new Player(board);
const context = new Context();
board.placeItem(banana);
player.update(5, context);
board.update(5, context);
const buff = new BuffArtifact(BuffType.EMPOWER, 1);
context.artifacts.subscribe((artifact) => {
  console.log('Receive: Artifact');
});
context.buffs.subscribe((buff) => {
  console.log('Receive: Buff');
  buff.amount.addModifier(flat5);
})
const filtered = context.artifacts.pipe(
  filter((val) => val.constructor == BuffArtifact)
);
filtered.subscribe((artifact) => {
  console.log('Receive: Filtered Artifact');
});
context.buffs.next(buff);
console.log(buff.amount.evaluate());

// console.log(attr1.evaluate());