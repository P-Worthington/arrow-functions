/**
 * js map() function
 */

// Using a for loop
let nums = [1,2,3,4,5];
let results = []
for (let num of nums) {
    results.push(num *2);
}
//console.log(results) // 2, 4, 6, 8, 10

// Using map()
const multiplyByTwo = function (num) {
    return num * 2;
}
const mapResults = nums.map(multiplyByTwo)
//console.log(mapResults) // 2, 4, 6, 8, 10

// Simplified w/ map()
const  simpleMapResults = nums.map(function (num) { return num *2});
//console.log(simpleMapResults); // 2, 4, 6, 8, 10


// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2)
//console.log(arrow) // 2, 4, 6, 8, 10

// With objects:
const students1 = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
];

const studentWithID = students1.map(student => [student.name, student.id])
// console.log(studentWithID) // [ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] ]


/**
 * filter() command
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
const oldEnough = people.filter(person => person.age >= 21);
// console.log(oldEnough); // michael, age 23

const paul = people.filter(p => p.name === 'Paul')[0];
// console.log(paul); // Paul
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
];

const hasStrongSkills = student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
    return strongSkills.length > 0;
}

const candidates = students.filter(hasStrongSkills);
// console.log(candidates) 
/**[
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [ [Object], [Object], [Object] ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [ [Object], [Object], [Object] ]
  }
] */

  const names = candidates.filter(c => c.name);
  //console.log(names)

  
