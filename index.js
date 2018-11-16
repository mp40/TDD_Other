const test = function () {
  return 'working'
}

const testArray = function (arrayToFilter) {
  let result = false
  if (Array.isArray(arrayToFilter)) {
    result = true
  };
  return result
}

const checkIfObject = function (arrayToTest) {
  return true
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
  checkIfObject
}
