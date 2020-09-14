//1st task
function massive(n) {
    let mas = []
    for (let i = 0; i < n; i++) {
        mas.push(i)
    }
    return mas
}
console.log(massive(5))


//2nd task
function divide(x, y, z) {
    const bool = x % y === 0 && x % z === 0;
    console.log(bool)
}
divide(12, 6, -6)

//3rd task
function capital(a) {
    var symbol = a.length >= 1 && a.length <= 10 ? a[0].toUpperCase() + a.slice(1) : Error('Your string must be from 1 to 10 symbols!')
    console.log(symbol)
}
capital("helloworld")