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

describe('tests', () => {
  it('should prove test environment is set up', () => {
    expect(test()).to.equal('working')
  })
})

describe('filters the source array', () => {
  it('should return true if tested item is array', () => {
    const testArray = [
      []
    ]
    expect(filterArray(testArray)).to.equal(true)
  })
  it('should return false if tested item not an array', () => {
    expect(filterArray([7])).to.equal(false)
  })
  it('should return false if tested item is object', () => {
    expect(filterArray({})).to.equal(false)
  })
})
