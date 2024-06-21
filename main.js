;
/*An array named students store information about several students using the student template*/
var students = [
    { name: "Ali", seniorStatus: true,
        completeAssignment: true },
    { name: "Hassan", seniorStatus: false,
        completeAssignment: true },
    { name: "Saba", seniorStatus: false,
        completeAssignment: false },
    { name: "Ayesha", seniorStatus: true,
        completeAssignment: true },
    { name: "Farwa", seniorStatus: false,
        completeAssignment: false },
];
console.log(students);
/*Find student who are seniors and have completed their assignment*/
function seniorstudent(student) {
    return student.filter(function (student) { return student.
        seniorStatus && student.completeAssignment === true; });
}
console.log(seniorstudent(students));
/*Remove the students who haven't completed their assignments*/
function removestudents(student) {
    return students.filter(function (student) { return student.completeAssignment === false; });
}
console.log(removestudents(students));
