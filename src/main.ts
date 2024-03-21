import { Banana } from "@/models/items/Banana";
import { IncreaseModifier } from "@/models/modifiers/IncreaseModifier";
import { translateGridToText } from "@/models/utility/GridConfig";

let x = new Banana();
console.log(translateGridToText(x.gridConfig));
x.rotate();

let mod = new IncreaseModifier(5);
let mod2 = new IncreaseModifier(10);
console.log(mod.combine([mod2]));