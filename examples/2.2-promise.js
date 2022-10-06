// 包一层 Promise
function api() {
  return new Promise((resolve, reject) => {
    axios.get(/* 链接 */).then(data => {
      // ...
      // 经历了一系列数据处理
      resolve(data.xxx)
    })
  })
}

// 更好的做法：利用链式调用
function api() {
  return axios.get(/* 链接 */).then(data => {
    // ...
    // 经历了一系列数据处理
    return data.xxx
  })
}