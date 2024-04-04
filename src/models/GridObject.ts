import { Player } from "@/models/Player";
import { AttributeCollection } from "@/models/attributes/AttributeCollection";
import { Coord } from "@/models/utility/Coord";
import { GridConfig, translateGridToText } from "@/models/utility/GridConfig";
import { GridObjectTemplate } from "@/models/utility/GridObjectTemplate";
import { Rotation } from "@/models/utility/Rotation";
import * as math from "mathjs";

abstract class AttributeMixin extends AttributeCollection {}

export class GridObject extends AttributeMixin {
  rotation = Rotation.NONE;
  location: Coord[][] = [];
  baseGridConfig: GridConfig;
  gridConfig: GridConfig;
  owner: Player | undefined;
  constructor(template: GridObjectTemplate) {
    super();
    this.baseGridConfig = template.gridConfig;
    this.gridConfig = JSON.parse(JSON.stringify(this.baseGridConfig));
  }
  /**
   * rotates the object by transposing it and reversing column order
   * see https://math.stackexchange.com/questions/1676441/how-to-rotate-the-positions-of-a-matrix-by-90-degrees
   */
  rotate() {
    function generateMatrix(m:number, n:number): number[][] {
      let rows: number[][] = [];
      for (let i = 0; i < m; i++) {
        let cols:number[] = [];
        let identity = n - 1 - i;
        rows.push(cols);
        for (let j = 0; j < n; j++) {
          cols.push(j == identity ? 1 : 0)
        }
      }
      return rows;
    }
    let reverseMatrix = math.matrix(generateMatrix(this.baseGridConfig[0].length, this.baseGridConfig.length));
    let currentMatrix = math.matrix(this.gridConfig);
    currentMatrix = math.transpose(currentMatrix);
    let flippedMatrix = math.multiply(currentMatrix, reverseMatrix);
    console.log(translateGridToText(flippedMatrix.toArray() as GridConfig));
  }
}