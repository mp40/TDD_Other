const {
  expect
} = require('chai')

const {
  describe,
  it
} = require('mocha')

const {
  test,
  bar,
  Customer
} = require('..')

describe('tests', () => {
  it('should prove test environment is set up', () => {
    expect(test()).to.equal('working')
  })
})

describe('The bar', () => {
  it('should have a fridge', () => {
    expect(bar).to.contain.keys('fridge')
  })
  it('should have Asahi and Yebisu in the fridge', () => {
    expect(bar.fridge).to.contain.keys('asahi', 'yebisu')
  })
  it('should have prices for beers', () => {
    expect(bar.fridge.asahi).to.contain.keys('price')
    expect(bar.fridge.asahi.price).to.be.a('number')
    expect(bar.fridge.yebisu).to.contain.keys('price')
    expect(bar.fridge.yebisu.price).to.be.a('number')
  })
  it('should have tally for beers', () => {
    // expect(bar.fridge.asahi).to.contain.keys('price')
    expect(bar.fridge.asahi.amount).to.be.a('number')
    // expect(bar.fridge.yebisu).to.contain.keys('price')
    expect(bar.fridge.yebisu.amount).to.be.a('number')
  })
  it('should keep track of takings', () => {
    expect(bar.takings).to.be.a('number')
  })
  it('should have a closing time of midnight', () => {
    expect(bar.closingTime).to.equal(12)
  })
})

describe('customers', () => {
  const testCustomer = new Customer(1000, 2)
  it('should have a Customer Class', () => {
    expect(testCustomer).to.be.a('object')
  })
  it('should have a wallet for yen', () => {
    expect(testCustomer.wallet).to.equal(1000)
  })
  it('should have stamina defining how many hours they want to drink', () => {
    expect(testCustomer.stamina).to.equal(2)
  })
  it('should have a default favourite beer of Asahi', () => {
    expect(testCustomer.favourite).to.equal('asahi')
  })
  it('should be possible to change favorite beer', () => {
    const yebisuCustomer = new Customer(1000, 2, 'yebisu')
    expect(yebisuCustomer.favourite).to.equal('yebisu')
  })
})
