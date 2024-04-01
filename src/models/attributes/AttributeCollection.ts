import { AttributeType } from "@/models/attributes/AttributeTypes";
import { DerivedAttribute } from "@/models/attributes/DerivedAttribute";


/** 
 * @abstract AttributeCollection
 * This class is meant as a Mixin to give the new class
 * attributes and management functions for those attributes
 */
export abstract class AttributeCollection {
  // private attributes: DerivedAttribute<any>[] = [];
  private attributes: { [key in AttributeType]?: DerivedAttribute<any>[] } = {};
  addAttribute(attr: DerivedAttribute<any>): void {
    const type = attr.type,
      current = this.attributes[type];
    if(current) {
      current.push(attr);
    } else {
      this.attributes[type] = [attr];
    }
  }
}