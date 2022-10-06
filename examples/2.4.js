let ok = null
async function foo() {
  console.log(1)
  console.log(await new Promise(resolve => ok = resolve))
  console.log(3)
}
foo() // 1
ok(2) // 2 3