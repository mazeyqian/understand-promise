// Promise
function getUserInfo() {
  return getData().then(
    data => {
      return data
    }
  )
}

// async / await
async function getUserInfo() {
  return await getData()
}