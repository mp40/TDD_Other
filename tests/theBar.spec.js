const {
  expect
} = require('chai')

const {
  describe,
  it
} = require('mocha')

const {
  test,
  bar
} = require('..')

describe('tests', () => {
  it('should prove test environment is set up', () => {
    expect(test()).to.equal('working')
  })
})

describe('The bar', () => {
  it('should have a fridge', () => {
    expect(bar.fridge).to.equal(true)
  })
})
