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
    closingTime: 12,
    findDrink: function (customer) {
      let result
      for (let beer in this.fridge) {
        if (customer.favourite === beer) {
          result = this.fridge[beer]
          return result.amount > 0 ? result : `out of ${beer}`
        }
      }
    },
    buyDrink: function (customer) {
      const beer = this.findDrink(customer)
      if (customer.wallet < beer.price || beer === `out of ${customer.favourite}`) {
        return
      }
      customer.wallet -= beer.price
      this.takings += beer.price
      this.removeDrink(customer, this)
    },
    removeDrink: function (customer) {
      for (let beer in this.fridge) {
        if (customer.favourite === beer) {
          this.fridge[beer].amount -= 1
        }
      }
    }
  }
}

class Customer {
  constructor (wallet, stamina, perHour, favourite = 'asahi') {
    this.wallet = wallet
    this.stamina = stamina
    this.perHour = perHour
    this.favourite = favourite
  }
  drinkBeer (bar, startTime) {
    if (startTime === undefined) {
      return startTime
    }
    const beerPrice = bar.fridge[this.favourite].price
    let timeLeft = this.stamina
    let timeRemaining = startTime
    for (let i = this.wallet; i >= beerPrice; i -= beerPrice) {
      if (timeLeft <= 0 || timeRemaining >= 12) {
        break
      }
      this.eachHour(bar)
      timeLeft--
      timeRemaining++
    }
  }
  eachHour (bar) {
    for (let i = 0; i < this.perHour; i++) {
      bar.buyDrink(this)
    }
  }
}

module.exports = {
  test,
  createBar,
  Customer
}
