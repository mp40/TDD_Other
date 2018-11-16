const test = function () {
  return 'working'
}

const testArray = function (arrayToFilter) {
  let result = false
  if (Array.isArray(arrayToFilter[0])) {
    result = true
  };
  return result
}

const filterArray = function (arrayToFilter) {

}

module.exports = {
  test,
  testArray,
  filterArray
}
