// 获取游戏列表
// 仅为示例，与实际业务无关
function getGameXYZ() {
  const secret = genSecret()
  // 获取用户登录态
  return getUserToken(token)
    .then(token => {
      // 获取游戏列表
      return getGameList(token)
    })
}
// 渲染页面
function renderPage() {
  getGameXYZ()
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
// 其他场景
function doABC() {
  getGameXYZ()
    .then(data => {
      // ...
    })
    .then(data => {
      // ...
    })
    .catch(err => {
      console.error(err)
    })
}