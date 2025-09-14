// src/interfaces.ts
["type RowID", "number"]
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

export interface RowWithID extends RowElement {
  id: number;
}
