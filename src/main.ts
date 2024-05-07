import { Context } from "@/Context";
import { Board } from "@/models/Board";
import { Player } from "@/models/Player";
import { BuffArtifact } from "@/models/atrifacts/Buff";
import { ValueType } from "@/models/values/ValueTypes";
import { ScalarValue } from "@/models/values/ScalarValue";
import { Banana } from "@/models/items/Banana";
import { WoodenShield } from "@/models/items/WoodenShield";
import { WoodenSword } from "@/models/items/weapons/WoodenSword";
import { FlatModifier } from "@/models/modifiers/FlatModifier";
import { IncreaseModifier } from "@/models/modifiers/IncreaseModifier";
import { filter } from "rxjs";
import { ValueModifierManager } from "@/models/ValueModifierManager";
import { strict as assert } from 'assert';

let banana = new Banana();
let sword = new WoodenSword();
let shield = new WoodenShield();
// console.log(translateGridToText(banana.gridConfig));
// banana.rotate();

let seed_attr = new ScalarValue(5, ValueType.EMPOWER);
let flat1 = new FlatModifier(new ScalarValue(1, ValueType.MODIFIER));
seed_attr.addModifier(flat1);
let attr1 = new ScalarValue(10, ValueType.COOLDOWN);
let mod1 = new IncreaseModifier(new ScalarValue(50, ValueType.MODIFIER));
let mod2 = new IncreaseModifier(new ScalarValue(50, ValueType.MODIFIER));
//testing passing a random attribute value as a flat modifier value
//e.g. 5 int gives +5 mana
let flat_seed = new FlatModifier(new ScalarValue(() => { return seed_attr.evaluate(); }, ValueType.MODIFIER));
let flat8 = new FlatModifier(new ScalarValue(8, ValueType.MODIFIER));
attr1.addModifier(mod1);
attr1.addModifier(mod2);
attr1.addModifier(flat_seed);
attr1.addModifier(flat8);
banana.addAttribute(attr1);
assert.equal(attr1.evaluate(), 34);

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
  buff.amount.addModifier(flat8);
})
const filtered = Context.artifacts.pipe(
  filter((val) => val.constructor == BuffArtifact)
);
filtered.subscribe((artifact) => {
  console.log('Receive: Filtered Artifact');
});
board1.update(5, context1);
const val1 = new ScalarValue(1, ValueType.COOLDOWN);
const val2 = new ScalarValue(2, ValueType.COOLDOWN);
const manager = new ValueModifierManager((val, mod) => { return val === val1 });
manager.addModifier(mod1);
manager.addValue(val1);
manager.addValue(val2);
assert.ok(mod1.modifies.indexOf(val1) >= 0);
assert.ok(mod1.modifies.indexOf(val2) == -1);
manager.removeValue(val1);
assert.ok(mod1.modifies.indexOf(val1) >= -1);