const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true }
];
const students = runners
  .filter(runner => runner.student)
  .reduce((acc, nextWinner) => (acc.time < nextWinner.time ? acc : nextWinner));

console.log(students.name);
