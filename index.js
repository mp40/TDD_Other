const test = function () {
  return 'working'
}

const testArray = function (valueToTest) {
  let result = false
  if (Array.isArray(valueToTest)) {
    result = true
  };
  return result
}

const checkIfObject = function (valueToTest) {
  let result = false
  if (typeof valueToTest === 'object' && Array.isArray(valueToTest) === false && valueToTest !== null) {
    result = true
  }
  return result
}

const filterNonObjects = function (arrayToFilter) {
  return arrayToFilter.filter((item) => {
    return checkIfObject(item)
  })
}

const filterArray = function (arrayToFilter) {
  return arrayToFilter.filter((item) => {
    return testArray(item)
  })
}

module.exports = {
  test,
  testArray,
  filterArray,
  checkIfObject,
  filterNonObjects
}
