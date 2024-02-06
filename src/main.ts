import { Banana } from "@/models/items/Banana";
import { translateGridToText } from "@/models/utility/GridConfig";

let x = new Banana();
console.log(translateGridToText(x.gridConfig));
x.rotate();