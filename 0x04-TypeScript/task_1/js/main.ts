interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 22,
  location: "California"
};

// Add students to array
const studentsList: Student[] = [student1, student2];

// Create the table
const table = document.createElement("table");
table.border = "1";

// Create header row
const headerRow = table.insertRow();
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);

// Add a row for
