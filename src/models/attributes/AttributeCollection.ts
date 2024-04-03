import { AttributeType } from "@/models/attributes/AttributeTypes";
import { DerivedAttribute } from "@/models/attributes/DerivedAttribute";


/** 
 * @abstract AttributeCollection
 * This class is meant as a Mixin to give the new class
 * attributes and management functions for those attributes.
 * Note: Not sure how to consider the addition of an attribute
 * that already exists. Initial thought is attributes are unique
 * and adding multiple should instead be accomplished by modifying 
 * the attribute. e.g "Gain X armor on hit" would be "ArmorGainOnHit"
 * with default value of 0 and modified to grant anything at all.
 */
export abstract class AttributeCollection {
  private attributes: { [key in AttributeType]?: DerivedAttribute<any> } = {};
  addAttribute(attr: DerivedAttribute<any>): void {
    const type = attr.type,
      current = this.attributes[type];
    this.attributes[type] = attr;
  }
}