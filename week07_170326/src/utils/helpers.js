export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getGreeting = (name) =>
  `Welcome, ${capitalize(name)}! 🎓`;

export const createStudent = ({ name, course, year }) => ({
  id: Date.now(),
  name: capitalize(name.trim()),
  course: capitalize(course.trim()),
  year,
  status: 'Active',
  joinedAt: new Date().toLocaleDateString('en-IN'),
});

export const filterStudents = (students, query) =>
  students.filter(({ name, course }) =>
    name.toLowerCase().includes(query.toLowerCase()) ||
    course.toLowerCase().includes(query.toLowerCase())
  );

export const getTotalByYear = (students) =>
  students.reduce((acc, { year }) => {
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

export const getStatusLabel = (status) =>
  status === 'Active' ? '🟢 Active' : '🔴 Inactive';

export const fetchMockStudents = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Alice Sharma', course: 'Computer Science', year: '2nd Year', status: 'Active', joinedAt: '01/01/2024' },
        { id: 2, name: 'Bob Mehta', course: 'Data Science', year: '3rd Year', status: 'Active', joinedAt: '15/02/2024' },
        { id: 3, name: 'Carol D\'souza', course: 'AI & ML', year: '1st Year', status: 'Inactive', joinedAt: '10/03/2024' },
        { id: 4, name: 'David Patel', course: 'Cybersecurity', year: '4th Year', status: 'Active', joinedAt: '05/04/2024' },
        { id: 5, name: 'Eva Singh', course: 'Software Eng', year: '2nd Year', status: 'Active', joinedAt: '20/05/2024' },
        { id: 6, name: 'Frank Gupta', course: 'Web Development', year: '3rd Year', status: 'Inactive', joinedAt: '12/06/2024' },
      ]);
    }, 800);
  });
