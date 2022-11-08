const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879  ,passed: 1955},
  { first: 'Isaac', last: 'Newton', year: 1643  ,passed: 1727},
  { first: 'Galileo', last: 'Galilei', year: 1564  ,passed: 1642},
  { first: 'Marie', last: 'Curie', year: 1867  ,passed: 1934},
  { first: 'Johannes', last: 'Kepler', year: 1571  ,passed: 1630},
  { first: 'Nicolaus', last: 'copernicus', year: 1473  ,passed: 1543},
  { first: 'Max', last: 'Planck', year: 1858  ,passed: 1947}
]

const people = [
  'Beck Glenn', 'Becker Carl', 'Bdeckett Samuel', 'Beddoes Mick', 'Beecher Henry', 'Beethoven Ludwig', 'Begin Menachem',
  'Belloc Hilaire', 'Bellow saul', 'Benchley Robert', 'Benenson Peter', 'Ben-Gurion David', 'Benjamin David'
]

//filter the array base on the inventors born in 1500
const filterfifteen = inventors.filter((inven) =>{
  if(inven.year >= 1500 && inven.year < 1600){
    return true;
  }
})

console.table(filterfifteen)

// display the first and last name for each inventor 
const mappArr = inventors.map(inven => `${inven.first}  ${inven.last} `)

console.table(mappArr)
 
// sort the inventors base on  their years 
const arrSort = inventors.sort( (a, b) => a.year > b.year ? 1 : -1)
console.log(arrSort)

// calcute the sum of their ages
const totalYear = inventors.reduce( (total, inven) =>{
  return total + (inven.passed- inven.year)
},0)

console.log(totalYear)


// sort the inventors by year live 

const yearLive = inventors.sort((a, b) => {
const firstGuy = a.passed - a.year
const secondGuy = b.passed - b.year

return firstGuy > secondGuy ? -1 : 1
})

console.table(yearLive)


// sort the people alphabetically from their second name
const peopleSort = people.sort((firstName, lastName) => {
  const [afirst, alast] = firstName.split(' ')
  const [bfirst, blast] = lastName.split(' ')

  return alast > blast ? 1 : -1
  
})

console.log(peopleSort)


const data = [
  'car','car','car','car','car', 'truck','truck','truck','bikes','bikes','walk','walk','van','van'
]

const transport = data.reduce( (obj, item) => {

  if(!obj[item]) {
    obj[item] = 0
  }

  obj[item]++

  return obj;


}, {})

console.log(transport)