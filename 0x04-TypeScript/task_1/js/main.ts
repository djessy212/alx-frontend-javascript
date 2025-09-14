interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  contract: boolean;
}

// Define the object in the desired order
const teacher3: Teacher = {
  contract: false,
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
};

console.log(teacher3);
