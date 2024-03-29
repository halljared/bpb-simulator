import { DerivedAttribute } from "@/models/attributes/DerivedAttribute";


/** 
 * @abstract AttributeCollection
 * This class is meant as a Mixin to give the new class
 * attributes and management functions for those attributes
 */
export abstract class AttributeCollection {
  private attributes: DerivedAttribute<any>[] = [];
  addAttribute(attr: DerivedAttribute<any>): void {
    this.attributes.push(attr);
  }
}