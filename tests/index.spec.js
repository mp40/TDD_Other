const {
  expect
} = require('chai')

const {
  describe,
  it
} = require('mocha')

const {
  test
} = require('..')

const {
  filterArray
} = require('..')

const {
  filterNonArray
} = require('..')

const {
  testArray
} = require('..')

const {
  checkIfObject
} = require('..')

const {
  filterNonObjects
} = require('..')

describe('tests', () => {
  it('should prove test environment is set up', () => {
    expect(test()).to.equal('working')
  })
})

describe('Tests if item is array', () => {
  it('should return true if tested item is array', () => {
    expect(testArray(
      []
    )).to.equal(true)
  })
  it('should return false if tested item not an array', () => {
    expect(testArray(7)).to.equal(false)
  })
  it('should return false if tested item is object', () => {
    expect(testArray({})).to.equal(false)
  })
})

describe('filters out non-Array items from source array', () => {
  const arrayEqualsTwo = [7, {},
    [],
    [], true
  ]
  it('should filter out non-array items from array', () => {
    expect(filterNonArray(arrayEqualsTwo).length).to.equal(2)
  })
  const arrayEqualsFour = [7, null, [], undefined, false, [],
    [],
    [], {}
  ]
  it('should filter null and undefined from array', () => {
    expect(filterNonArray(arrayEqualsFour).length).to.equal(4)
  })
})

describe('returns true if item is object', () => {
  it('should return true if object', () => {
    expect(checkIfObject({})).to.equal(true)
    expect(checkIfObject(7)).to.equal(false)
  })
  it('should return false if array', () => {
    expect(checkIfObject([])).to.equal(false)
  })
  it('should return false if value is null', () => {
    expect(checkIfObject(null)).to.equal(false)
  })
})

describe('filters out arrays that do not only contain objects', () => {
  it('should filter out arrays which do not only contain objects', () => {
    expect(filterNonObjects([{}, {}, {}]).length).to.equal(3)
    expect(filterNonObjects([{}, {},
      [], 7, null
    ]).length).to.equal(2)
  })
})

describe('Takes an array and returns a filtered array that only contains arrays of objects', () => {
  const arrayToTest = [{},
    [], true, null, undefined, false, 11, 'hi', [], {}
  ]
  it('should return an array length of two', () => {
    expect(filterArray(arrayToTest).length).to.equal(2)
  })
})
