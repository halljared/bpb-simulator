import { ValueType } from "@/models/values/ValueTypes";
import { DerivedValue } from "@/models/values/DerivedValue";


/** 
 * @abstract ValueCollection
 * This class is meant as a Mixin to give the new class
 * arbitrary values and management functions for those values.
 * Note: Not sure how to consider the addition of an value type
 * that already exists. Initial thought is values types are unique
 * and adding multiple should instead be accomplished by modifying 
 * the value. e.g "Gain X armor on hit" would be "ArmorGainOnHit"
 * with default value of 0 and modified to grant anything at all.
 */
export abstract class ValueCollection {
  private attributes: { [key in ValueType]?: DerivedValue<any> } = {};
  addAttribute(val: DerivedValue<any>): void {
    const type = val.type,
      current = this.attributes[type];
    this.attributes[type] = val;
  }
}