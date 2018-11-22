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
      result = bar.fridge[beer]
    }
    return result
  }
}

const removeDrink = function (customer) {
  for (let beer in bar.fridge) {
    if (customer.favourite === beer) {
      bar.fridge[beer].amount -= 1
    }
  }
}

const buyDrink = function (customer) {
  const beer = findDrink(customer)
  customer.wallet -= beer.price
  bar.takings += beer.price
  removeDrink(customer)
}

const drinkBeer = function (customer, startTime) {
  const beerPrice = bar.fridge[customer.favourite].price
  let timeLeft = customer.stamina
  let timeRemaining = startTime
  for (let i = customer.wallet; i >= beerPrice; i -= beerPrice) {
    console.log(timeRemaining)
    if (timeLeft <= 0 || timeRemaining >= 12) {
      break
    }
    buyDrink(customer)
    timeLeft -= 0.5 // based on drinking speed of 2 drinks per hour
    timeRemaining += 0.5
  }
}

module.exports = {
  test,
  bar,
  Customer,
  findDrink,
  buyDrink,
  drinkBeer
}
