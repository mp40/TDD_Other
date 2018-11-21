const test = function () {
  return 'working'
}

const bar = {
  fridge: {
    asahi: {
      type: 'beer',
      price: 500,
      amount: 12
    },
    yebisu: {
      type: 'fancy beer',
      price: 700,
      amount: 6
    }
  },
  takings: 0,
  closingTime: 12
}

class Customer {
  constructor (wallet, stamina, favourite = 'asahi') {
    this.wallet = wallet
    this.stamina = stamina
    this.favourite = favourite
  }
}

const findDrink = function (customer) {
  let result
  for (let beer in bar.fridge) {
    if (customer.favourite === beer) {
      result = beer
    }
    return result
  }
}

const buyDrinks = function (customer) {
  return true
}

module.exports = {
  test,
  bar,
  Customer,
  findDrink,
  buyDrinks
}
