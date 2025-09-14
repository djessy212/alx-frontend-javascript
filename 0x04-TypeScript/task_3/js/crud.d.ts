/// <reference path="..." />
["declare function insertRow(row: RowElement): number", "declare function deleteRow(rowId: RowID): void", "declare function updateRow("]
import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): RowID;
export function updateRow(rowId: RowID, row: RowElement): void;
export function deleteRow(rowId: RowID): void;
