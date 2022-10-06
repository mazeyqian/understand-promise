function wait(ms) {
  return new Promise(resolve => setTimeout(resolve.bind(null, ms), ms))
}

// Promise.all
Promise.all([wait(2000), wait(4000), wait(3000)])
  .then(console.log)
// 4 秒后 [ 2000, 4000, 3000 ]

// Promise.race
Promise.race([wait(2000), wait(4000), wait(3000)])
  .then(console.log)
// 2 秒后 2000