var main = (function (p1, p2) {
    return {
        total: p1.nm + p2.nm
    }
})(part1, part2)

console.log(main.total)

var btn = document.getElementById('myBtn')
btn.onclick = function() {
    console.log(`Function Called in click`)
}
console.log(`Function Called `)