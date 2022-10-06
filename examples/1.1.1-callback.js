// 回调函数
function renderPage() {
  const secret = genSecret()
  // 获取用户登录态
  getUserToken({
    secret,
    success: token => {
      // 获取游戏列表
      getGameList({
        token,
        success: data => {
          // 渲染游戏列表
          render({
            list: data.list,
            success: () => {
              // 埋点数据上报
              report()
            },
            fail: err => {
              console.error(err)
            }
          })
        },
        fail: err => {
          console.error(err)
        }
      })
    },
    fail: err => {
      console.error(err)
    }
  })
}