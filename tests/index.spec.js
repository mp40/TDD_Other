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

describe('tests', () => {
  it('should prove test environment is set up', () => {
    expect(test()).to.equal('working')
  })
})

describe('Tests if index is array in array with length of one', () => {
  it('should return true if tested item is array', () => {
    expect(testArray([
      []
    ])).to.equal(true)
  })
  it('should return false if tested item not an array', () => {
    expect(testArray([7])).to.equal(false)
  })
  it('should return false if tested item is object', () => {
    expect(testArray({})).to.equal(false)
  })
})

describe('filters out non-Array items from source array', () => {
  const arrayToTest = [7, {},
    [],
    [], true, null
  ]
  it('should return true if tested item is array', () => {
    expect(filterArray(arrayToTest).length).to.equal(2)
  })
})
