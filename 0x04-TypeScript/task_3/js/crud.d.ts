interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // optional, because your insert example doesn't include age
}

type RowWithID = RowElement & { id: number };

const CRUD = (() => {
  let rows: RowWithID[] = [];
  let currentId = 1;

  return {
    insertRow(obj: RowElement): RowWithID {
      const newRow = { ...obj, id: currentId++ };
      rows.push(newRow);
      console.log("Insert row", newRow);
      return newRow;
    },

    updateRow(id: number, updatedRow: RowElement): boolean {
      const index = rows.findIndex(row => row.id === id);
      if (index === -1) {
        console.warn(`Row id ${id} not found for update.`);
        return false;
      }
      rows[index] = { ...updatedRow, id };
      console.log(`Update row ${id}`, rows[index]);
      return true;
    },

    deleteRow(id: number): boolean {
      const index = rows.findIndex(row => row.id === id);
      if (index === -1) {
        console.warn(`Row id ${id} not found for delete.`);
        return false;
      }
      rows.splice(index, 1);
      console.log(`Delete row id ${id}`);
      return true;
    },

    // Optional: method to show current rows
    getRows(): RowWithID[] {
      return [...rows];
    }
  };
})();

// Usage example:

const obj = { firstName: "Guillaume", lastName: "Salva" };
const insertedRow = CRUD.insertRow(obj);
// Insert row {firstName: "Guillaume", lastName: "Salva", id: 1}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(insertedRow.id, updatedRow);
// Update row 1 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(insertedRow.id);
// Delete row id 1
