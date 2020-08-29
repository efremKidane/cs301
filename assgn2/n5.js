let prompt=require('prompt-sync')();
let noStudents=prompt("please enter total number of students:");
let noTeams=prompt("please enter the number of teams you want: ");
let studentsInTeam=parseInt(noStudents/noTeams);
let remainStudents=parseInt(noStudents%noTeams);
let teams1=parseInt(noTeams-remainStudents);
let team2=parseInt(noTeams-teams1);
console.log(team2+" "+"with"+" "+parseInt(studentsInTeam+1)+" "+"students"+" "+"and"+" "+teams1+" "+"with"+" "+studentsInTeam+" "+"students");