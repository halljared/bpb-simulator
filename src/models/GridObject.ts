import { Coord } from "@/models/utility/Coord";
import { GridConfig, translateGridToText } from "@/models/utility/GridConfig";
import { GridObjectTemplate } from "@/models/utility/GridObjectTemplate";
import { Rotation } from "@/models/utility/Rotation";
import * as math from "mathjs";
export class GridObject {
  rotation = Rotation.NONE;
  location: Coord[][] = [];
  baseGridConfig: GridConfig;
  gridConfig: GridConfig;
  constructor(template: GridObjectTemplate) {
    this.baseGridConfig = template.gridConfig;
    this.gridConfig = JSON.parse(JSON.stringify(this.baseGridConfig));
  }
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