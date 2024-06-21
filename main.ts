//ARRAYS ASSIGNMENT 4 (STUDENT LIST ORGANIZER)
/*To provide code defines an interference named students store information like name,senior status(true/false),and whether 
they've completed their assignment(true/false)*/
interface student {
    name:string,
    seniorStatus:boolean,
    completeAssignment:boolean};
 /*An array named students store information about several students using the student template*/
 let students:student [] = [
    {name:"Ali", seniorStatus:true,
completeAssignment:true},
    {name:"Hassan",seniorStatus:false,
completeAssignment:true}, 
    {name:"Saba",seniorStatus:false,
completeAssignment:false},
    {name:"Ayesha",seniorStatus:true,
completeAssignment:true},    
    {name:"Farwa",seniorStatus:false,
completeAssignment:false},    
]; 
console.log(students);
/*Find student who are seniors and have completed their assignment*/
function seniorstudent(student: student[]) {
    return student.filter(student => student.
seniorStatus && student.completeAssignment === true)
}
console.log(seniorstudent(students));
/*Remove the students who haven't completed their assignments*/
function removestudents(student: student[]) {
    return students.filter(student => student.completeAssignment === false)
}   
console.log(removestudents(students));

    




 



