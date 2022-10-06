// Promise
function renderPage() {
  const secret = genSecret()
  // 获取用户登录态
  getUserToken(token)
    .then(token => {
      // 获取游戏列表
      return getGameList(token)
    })
    .then(data => {
      // 渲染游戏列表
      return render(data.list)
    })
    .then(() => {
      // 埋点数据上报
      report()
    })
    .catch(err => {
      console.error(err)
    })
}