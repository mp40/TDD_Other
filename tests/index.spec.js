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
  testArray
} = require('..')

const {
  checkIfObject
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
    expect(filterArray(arrayEqualsTwo).length).to.equal(2)
  })
  const arrayEqualsFour = [7, null, [], undefined, false, [],
    [],
    [], {}
  ]
  it('should filter null and undefined from array', () => {
    expect(filterArray(arrayEqualsFour).length).to.equal(4)
  })
})

describe('filters out arrays which do not contain objects', () => {
  it('should return true if object', () => {
    expect(checkIfObject([{}])).to.equal(true)
  })
})
