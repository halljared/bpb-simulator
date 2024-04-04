import { Context } from "@/Context";
import { Board } from "@/models/Board";
import { Player } from "@/models/Player";
import { BuffArtifact } from "@/models/atrifacts/Buff";
import { AttributeType } from "@/models/attributes/AttributeTypes";
import { ScalarAttribute } from "@/models/attributes/ScalarAttribute";
import { Banana } from "@/models/items/Banana";
import { WoodenShield } from "@/models/items/WoodenShield";
import { WoodenSword } from "@/models/items/weapons/WoodenSword";
import { FlatModifier } from "@/models/modifiers/FlatModifier";
import { IncreaseModifier } from "@/models/modifiers/IncreaseModifier";
import { MoreModifier } from "@/models/modifiers/MoreModifier";
import { filter } from "rxjs";

let banana = new Banana();
let sword = new WoodenSword();
let shield = new WoodenShield();
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
Context.initialize();
const player1 = new Player();
const player2 = new Player();
const context1 = new Context(player1, player2);
const context2 = new Context(player2, player1);
const board1 = new Board(context1);
const board2 = new Board(context2);
player1.setBoard(board1);
player1.setBoard(board2);
banana.owner = player1;
sword.owner = player1;
shield.owner = player2;
board1.placeItem(banana);
board1.placeItem(sword);
board2.placeItem(shield);
player1.update(5, context1);
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
board1.update(5, context1);
