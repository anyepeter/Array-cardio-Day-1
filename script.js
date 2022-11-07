const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879  ,passed: 1955},
  { first: 'Isaac', last: 'Newton', year: 1643  ,passed: 1727},
  { first: 'Galileo', last: 'Galilei', year: 1564  ,passed: 1642},
  { first: 'Marie', last: 'Curie', year: 1867  ,passed: 1934},
  { first: 'Johannes', last: 'Kepler', year: 1571  ,passed: 1630},
  { first: 'Nicolaus', last: 'copernicus', year: 1473  ,passed: 1543},
  { first: 'Max', last: 'Planck', year: 1858  ,passed: 1947}
]

const filterfifteen = inventors.filter((inven) =>{
  if(inven.year >= 1500 && inven.year < 1600){
    return true;
  }
})

console.table(filterfifteen)

const mappArr = inventors.map(inven => `${inven.first}  ${inven.last} `)

console.table(mappArr)

const arrSort = inventors.sort( (a, b) => a.year > b.year ? 1 : -1)
console.log(arrSort)