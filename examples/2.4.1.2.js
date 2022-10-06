// Promise
function getGameInfo() {
  getUserAbValue().then(
    abValue => {
      if (abValue === 1) {
        return getAInfo().then(
          data => {
            // ...
          }
        )
      } else {
        return getBInfo().then(
          data => {
            // ...
          }
        )
      }
    }
  )
}

// async / await
async function getGameInfo() {
  const abValue = await getUserAbValue()
  if (abValue === 1) {
    const data = await getAInfo()
    // ...
  } else {
    // ...
  }
}