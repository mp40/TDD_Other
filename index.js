// const test = function () {
//   return 'working'
// }

// const testArray = function (valueToTest) {
//   let result = false
//   if (Array.isArray(valueToTest)) {
//     result = true
//   };
//   return result
//   // return Array.isArray(valueToTest) // <-refcator to this
// }

// const checkIfObject = function (valueToTest) {
//   let result = false
//   if (typeof valueToTest === 'object' && Array.isArray(valueToTest) === false && valueToTest !== null) {
//     result = true
//   }
//   return result
//   // return typeof valueToTest === 'object' && Array.isArray(valueToTest) === false && valueToTest !== null // <-refactor to this
// }

// const filterNonObjects = function (arrayToFilter) {
//   return arrayToFilter.filter((item) => {
//     return item.every((value) => {
//       checkIfObject(value)
//     })
//   })
// }

// const filterNonArray = function (arrayToFilter) {
//   return arrayToFilter.filter((item) => {
//     return testArray(item)
//   })
// }

// const filterArray = function (arrayToFilter) {
//   let result = filterNonArray(arrayToFilter)
//   result = filterNonObjects(result)
//   return result
// }

// module.exports = {
//   test,
//   testArray,
//   filterArray,
//   checkIfObject,
//   filterNonObjects,
//   filterNonArray
// }
