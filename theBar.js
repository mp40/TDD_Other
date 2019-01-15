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
  constructor (wallet, stamina, perHour, favourite = 'asahi') {
    this.wallet = wallet
    this.stamina = stamina
    this.perHour = perHour
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
  if (customer.wallet < beer.price || beer === `out of ${customer.favourite}`) {
    return
  }
  customer.wallet -= beer.price
  bar.takings += beer.price
  removeDrink(customer, bar)
}

const eachHour = function (customer, bar) {
  for (let i = 0; i < customer.perHour; i++) {
    buyDrink(customer, bar)
  }
}

const drinkBeer = function (customer, bar, startTime) {
  if (startTime === undefined) {
    return startTime
  }
  const beerPrice = bar.fridge[customer.favourite].price
  let timeLeft = customer.stamina
  let timeRemaining = startTime
  for (let i = customer.wallet; i >= beerPrice; i -= beerPrice) {
    if (timeLeft <= 0 || timeRemaining >= 12) {
      break
    }
    eachHour(customer, bar)
    timeLeft--
    timeRemaining++
  }
}

module.exports = {
  test,
  createBar,
  Customer,
  findDrink,
  buyDrink,
  drinkBeer
}
