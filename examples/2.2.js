const p = new Promise(r => r(1))
  .then(res => {
    console.log(res) // 1
    return Promise.resolve(2)
      .then(res => res + 10) // === new Promise(r => r(1))
      .then(res => res + 10) // 由此可见，每次返回的是实例后面跟的最后一个 then
  })
  .then(res => {
    console.log(res) // 22
    return 3 // === Promise.resolve(3)
  })
  .then(res => {
    console.log(res) // 3
  })
  .then(res => {
    console.log(res) // undefined
    return '最强王者'
  })

p.then(console.log.bind(null, '是谁活到了最后:')) // 是谁活到了最后: 最强王者