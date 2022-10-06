function wasteTime(ms) {
  return new Promise(resolve => setTimeout(() => {
    resolve(ms)
    console.log('waste', ms)
  }, ms))
}

// 依次浪费 3 4 5 3 秒 === 15 秒
const arr = [3000, 4000, 5000, 3000]
arr.reduce(async (last, curr) => {
  await last
  return wasteTime(curr)
}, undefined)