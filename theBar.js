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

module.exports = {
  test,
  bar
}
