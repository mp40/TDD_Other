const test = function () {
  return 'working'
}

const createBar = function () {
  return {
    fridge: {
      asahi: {
        price: 500,
        amount: 12
      },
      yebisu: {
        price: 700,
        amount: 6
      }
    },
    takings: 0,
    closingTime: 12
  }
}

class Customer {
  constructor (wallet, stamina, favourite = 'asahi') {
    this.wallet = wallet
    this.stamina = stamina
    this.favourite = favourite
  }
}

const findDrink = function (customer, bar) {
  let result
  for (let beer in bar.fridge) {
    if (customer.favourite === beer) {
      result = bar.fridge[beer]
      return result.amount > 0 ? result : `out of ${beer}`
    }
  }
}

const removeDrink = function (customer, bar) {
  for (let beer in bar.fridge) {
    if (customer.favourite === beer) {
      bar.fridge[beer].amount -= 1
    }
  }
}

const buyDrink = function (customer, bar) {
  const beer = findDrink(customer, bar)
  customer.wallet -= beer.price
  bar.takings += beer.price
  removeDrink(customer, bar)
}

module.exports = {
  test,
  createBar,
  Customer,
  findDrink,
  buyDrink
}
