const {
  expect
} = require('chai')

const {
  describe,
  it
} = require('mocha')

const {
  test,
  createBar,
  Customer,
  findDrink,
  buyDrink

} = require('..')

describe('tests', () => {
  it('should prove test environment is set up', () => {
    expect(test()).to.equal('working')
  })
})

describe('the bar', () => {
  const bar = createBar()
  it('should have a fridge containing Asahi and Yebisu beers', () => {
    expect(bar.fridge).to.contain.keys('asahi', 'yebisu')
  })
})

describe('customer properties', () => {
  const customer = new Customer(1000, 2)
  it('should have a wallet for yen', () => {
    expect(customer.wallet).to.equal(1000)
  })
  it('should have stamina defining how many hours they want to drink', () => {
    expect(customer.stamina).to.equal(2)
  })
  it('should have a default favourite beer of Asahi', () => {
    expect(customer.favourite).to.equal('asahi')
  })
  it('should be possible to change favorite beer', () => {
    const yebisuCustomer = new Customer(1000, 2, 'yebisu')
    expect(yebisuCustomer.favourite).to.equal('yebisu')
  })
})

describe('the customer drinking at the bar', () => {
  describe('finding the right beer', () => {
    it('should be possible to find their favourite beer', () => {
      const bar = createBar()
      const customer = new Customer(1000, 2)
      const drink = findDrink(customer, bar)
      expect(drink.price).to.equal(500)
    })
    it('should return undefined if their favourite beer is not stocked', () => {
      const bar = createBar()
      const customer = new Customer(1000, 2, 'kirin')
      const drink = findDrink(customer, bar)
      expect(drink).to.equal(undefined)
    })
    it('should return out of beer message if amount is zero', () => {
      const barWithoutBeer = createBar()
      barWithoutBeer.fridge.asahi.amount = 0
      const customer = new Customer(1000, 2)
      const drink = findDrink(customer, barWithoutBeer)
      expect(drink).to.equal('out of asahi')
    })
  })
  describe('buying a beer', () => {
    const customer = new Customer(1000, 2)
    const bar = createBar()
    buyDrink(customer, bar)
    it('should cost money to buy a beer', () => {
      expect(customer.wallet).to.equal(500)
    })
    it('should remove a beer from the fridge when the customer buys it', () => {
      expect(bar.fridge.asahi.amount).to.equal(11)
    })
    it('should add money to the takings when beer is purchased', () => {
      expect(bar.takings).to.equal(500)
    })
  })
})
