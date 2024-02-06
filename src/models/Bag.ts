import { GridObject } from "@/models/GridObject";
import { BagTemplate } from "@/models/utility/BagTemplate";

export class Bag extends GridObject {
  constructor(template: BagTemplate) {
    super(template);
  }
}
