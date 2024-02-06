export enum GridConfigLiteral {
  SPACE =   0,
  OBJECT =  1,
  BUFF =    2,
  BUFF2 =   3
}
export type GridConfig = GridConfigLiteral[][];

const GridConfigMap = {
  " ": GridConfigLiteral.SPACE,
  "o": GridConfigLiteral.OBJECT,
  "*": GridConfigLiteral.BUFF,
  "#": GridConfigLiteral.BUFF2
}
const GridConfigReverseMap: {[val in GridConfigLiteral]: string} = {
  0: " ",
  1: "o",
  2: "*",
  3: "#",
};

export function translateJsonGrid(grid: string[][]): GridConfig {
  let rows = [];
  for (let i = 0; i < grid.length; i++) {
    const inputRow = grid[i];
    let row:GridConfigLiteral[] = [];
    rows.push(row);
    for (let j = 0; j < inputRow.length; j++) {
      row.push(GridConfigMap[inputRow[j] as " " | "o" | "*" | "#"]);
    }
  }
  return rows;
}

export function translateGridToText(grid: GridConfig): string[][] {
  let rows = [];
  for (let i = 0; i < grid.length; i++) {
    const inputRow = grid[i];
    let row:string[] = [];
    rows.push(row);
    for (let j = 0; j < inputRow.length; j++) {
      row.push(GridConfigReverseMap[inputRow[j]]);
    }
  }
  return rows;
}