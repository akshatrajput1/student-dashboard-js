const students = [
  { id: 1, name: "Akshat", marks: 85, subject: "Math" },
  { id: 2, name: "Rahul", marks: 60, subject: "Science" },
  { id: 3, name: "Priya", marks: 92, subject: "English" },
  { id: 4, name: "Neha", marks: 75, subject: "Math" },
  { id: 5, name: "Arjun", marks: 45, subject: "Science" },
];

const output = document.getElementById("output");

// Show All Students (map + destructuring)
function showAll() {
  const result = students.map(({ name, marks, subject }) => {
    return `<p>${name} - ${marks} (${subject})</p>`;
  });

  output.innerHTML = result.join("");
}

// Filter Toppers (filter)
function showToppers() {
  const toppers = students.filter((student) => student.marks > 80);

  const result = toppers.map(({ name, marks }) => {
    return `<p>${name} - ${marks}</p>`;
  });

  output.innerHTML = result.join("");
}

// Average Marks (reduce)
function showAverage() {
  const total = students.reduce((acc, student) => acc + student.marks, 0);
  const avg = (total / students.length).toFixed(2);

  output.innerHTML = `<h2>Average Marks: ${avg}</h2>`;
}

// Group by Subject (reduce + destructuring)
function showGrouped() {
  const grouped = students.reduce((acc, { subject, name }) => {
    if (!acc[subject]) acc[subject] = [];
    acc[subject].push(name);
    return acc;
  }, {});

  let result = "";

  for (let subject in grouped) {
    result += `<h3>${subject}</h3>`;
    grouped[subject].forEach((name) => {
      result += `<p>${name}</p>`;
    });
  }

  output.innerHTML = result;
}

students.forEach(({ name }) => {
  console.log("Student:", name);
});
