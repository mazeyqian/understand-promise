const PPlugin = {/* Pass */ }
// 此处为理想情况，随着业务快速迭代，会变得不可控，往往需要多个状态判断
let ppInitStatus = false
let ppInitCallback = null
PPlugin.init = callback => {
  if (ppInitStatus) {
    callback && callback(/* 数据 */)
  } else {
    ppInitCallback = callback
  }
}
// 客户端桥接...
// 服务端接口...
// 经历了一系列同步异步程序后初始化完成
ppInitCallback && ppInitCallback(/* 数据 */)
ppInitStatus = true