import { DerivedAttribute } from "@/models/attributes/DerivedAttribute";

export abstract class AttributeCollection {
  abstract attributes: DerivedAttribute<any>[];
  addAttribute(attr: DerivedAttribute<any>): void {
    this.attributes.push(attr);
  }
}