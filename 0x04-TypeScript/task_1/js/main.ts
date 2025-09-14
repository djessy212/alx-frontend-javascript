interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  contract?: boolean; // optional property
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
