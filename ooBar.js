const test = function () {
  return 'oo working'
}

class Bar {
  constructor (asahiPrice, asahiAmount, yebisuPrice, yebisuAmount) {
    this.fridge = {
      asahi: {
        price: asahiPrice,
        amount: asahiAmount
      },
      yebisu: {
        price: yebisuPrice,
        amount: yebisuAmount
      }
    }
    this.takings = 0
    this.closingTime = 12
  }
  findDrink (customer) {
    let result
    for (let beer in this.fridge) {
      if (customer.favourite === beer) {
        result = this.fridge[beer]
        return result.amount > 0 ? result : `out of ${beer}`
      }
    }
  }
  buyDrink (customer) {
    const beer = this.findDrink(customer)
    if (customer.wallet < beer.price || beer === `out of ${customer.favourite}`) {
      return
    }
    customer.wallet -= beer.price
    this.takings += beer.price
    this.removeDrink(customer, this)
  }
  removeDrink (customer) {
    for (let beer in this.fridge) {
      if (customer.favourite === beer) {
        this.fridge[beer].amount -= 1
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
  drinkBeer (barTender, startTime) {
    if (startTime === undefined) {
      return startTime
    }
    const beerPrice = barTender.fridge[this.favourite].price
    let timeLeft = this.stamina
    let timeRemaining = startTime
    for (let i = this.wallet; i >= beerPrice; i -= beerPrice) {
      if (timeLeft <= 0 || timeRemaining >= 12) {
        break
      }
      this.eachHour(barTender)
      timeLeft--
      timeRemaining++
    }
  }
  eachHour (barTender) {
    for (let i = 0; i < this.perHour; i++) {
      barTender.buyDrink(this)
    }
  }
}

module.exports = {
  test,
  Bar,
  Customer
}
