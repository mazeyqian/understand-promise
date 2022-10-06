// 实现
const defer = () => {
  let pending = [] // 充当状态并收集观察者
  let value = undefined
  return {
    resolve: (_value) => { // FulFilled!
      value = _value
      if (pending) {
        pending.forEach(callback => callback(value))
        pending = undefined
      }
    },
    then: (callback) => {
      if (pending) {
        pending.push(callback)
      } else {
        callback(value)
      }
    }
  }
}

// 模拟
const mockPromise = () => {
  let p = defer()
  setTimeout(() => {
    p.resolve('success!')
  }, 3000)
  return p
}

mockPromise().then(res => {
  console.log(res)
})

console.log('script end')
// script end
// 3 秒后
// success!