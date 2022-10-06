// Golang Example
func main() {
	p1 := promise.New(func(resolve func(int), reject func(error)) {
		factorial := findFactorial(20)
		resolve(factorial)
	})
	p2 := promise.New(func(resolve func(string), reject func(error)) {
		ip, err := fetchIP()
		if err != nil {
			reject(err)
			return
		}
		resolve(ip)
	})
	factorial, _ := p1.Await()
	fmt.Println(factorial)
	IP, _ := p2.Await()
	fmt.Println(IP)
}

// Other Code...