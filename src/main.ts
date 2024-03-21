import { AttributeType } from "@/models/attributes/Attributes";
import { ScalarAttribute } from "@/models/attributes/ScalarAttribute";
import { Banana } from "@/models/items/Banana";
import { FlatModifier } from "@/models/modifiers/FlatModifier";
import { IncreaseModifier } from "@/models/modifiers/IncreaseModifier";
import { MoreModifier } from "@/models/modifiers/MoreModifier";
import { translateGridToText } from "@/models/utility/GridConfig";

let x = new Banana();
console.log(translateGridToText(x.gridConfig));
x.rotate();

let mod1 = new IncreaseModifier(50);
let mod2 = new IncreaseModifier(50);
let mod3 = new MoreModifier(50);
let mod4 = new FlatModifier(5);
let mod5 = new FlatModifier(8);
let attr1 = new ScalarAttribute(10, AttributeType.COOLDOWN);
attr1.addModifier(mod1);
attr1.addModifier(mod2);
attr1.addModifier(mod3);
attr1.addModifier(mod4);
attr1.addModifier(mod5);
console.log(attr1.evaluate());