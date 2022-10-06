// async / await & Promise.all
async function foo() {
  // ...
  const [a, b, c] = await Promise.all([promiseFnA(), promiseFnB(), promiseFnC()])
  const d = await promiseFnD()
  // ...
}