import { Context } from "@/Context";
import { Bag } from "@/models/Bag";
import { Board } from "@/models/Board";
import { Item } from "@/models/Item";
import { AttributeCollection } from "@/models/attributes/AttributeCollection";

abstract class AttributeMixin extends AttributeCollection {}

export class Player extends AttributeMixin {
  private items: Item[] = [];
  private bags: Bag[] = [];
  constructor(private board: Board) {
    super();
  }

  addItem(item: Item): void {
    this.items.push(item);
  }
  addBag(bag: Bag): void {
    this.bags.push(bag);
  }
  update(dt: number, context: Context) {
  }

}