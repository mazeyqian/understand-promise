// async / await
async function initGame() {
  render(await getGame()) // 等待获取游戏执行完毕再去获取用户信息
  report(await getUserInfo())
}

// Promise
function initGame() {
  getGame()
    .then(render)
    .catch(console.error)
  getUserInfo() // 获取用户信息和获取游戏同步进行
    .then(report)
    .catch(console.error)
}