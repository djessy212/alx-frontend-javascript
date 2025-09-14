// index.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
["const row: RowElement"]
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 20,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// Function to render table
function renderStudentsTable(students: Student[]): void {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  const firstNameHeader = document.createElement("th");
  firstNameHeader.textContent = "First Name";
  const locationHeader = document.createElement("th");
  locationHeader.textContent = "Location";

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);

  students.forEach(student => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  document.body.appendChild(table);
}

// Run the function to render the table on page load
renderStudentsTable(studentsList);
