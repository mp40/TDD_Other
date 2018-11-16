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
  it('return true if tested item is array', () => {
    const testArray = [
      []
    ]
    expect(filterArray(testArray)).to.equal(true)
  })
})
