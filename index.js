const test = function () {
  return 'working'
}

const filterArray = function (arrayToFilter) {
  let result = false
  if (Array.isArray(arrayToFilter[0])) {
    result = true
  };
  return result
}

module.exports = {
  test,
  filterArray
}
