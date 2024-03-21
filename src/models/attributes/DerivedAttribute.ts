import { AttributeType } from "@/models/attributes/Attributes";

export interface DerivedAttribute<T> {
  type: AttributeType;
  baseValue: T;
}