import { Context } from "@/Context";
import { Bag } from "@/models/Bag";
import { Board } from "@/models/Board";
import { Item } from "@/models/items/Item";
import { ValueCollection } from "@/models/values/ValueCollection";

abstract class AttributeMixin extends ValueCollection {}

export class Player extends AttributeMixin {
  private items: Item[] = [];
  private bags: Bag[] = [];
  private board: Board | undefined;
  constructor() {
    super();
  }

  setBoard(board: Board): void { 
    this.board = board;
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