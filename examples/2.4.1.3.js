// Promise
function getGameInfo() {
  getToken().then(
    token => {
      getLevel(token).then(
        level => {
          getInfo(token, level).then(
            data => {
              // ...
            }
          )
        }
      )
    }
  )
}

// async / await
async function getGameInfo() {
  const token = await getToken()
  const level = await getLevel(token)
  const data = await getInfo(token, level)
  // ...
}