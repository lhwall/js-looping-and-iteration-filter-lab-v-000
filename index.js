// Code your solution in this file
function findMatching(array, name){
  array.filter(function (item) {return item.toUpperCase() === name.toUpperCase()})
}