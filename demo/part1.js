// DOM Manipulation
console.log(`Any thing would printed in browser logger`)

console.log(console)
console.table({ nm :'codekul', batch : 'angular'})

console.log(document)

// var ipAny = document.getElementById('ipAny')
// var dvAny = document.getElementById('dvAny')
// ipAny.onkeyup = function(ev) {
//     console.log(ev.target.value)
//     dvAny.innerHTML = '<h1>'+ ev.target.value +'</h1>'
// }
// console.log(ipAny)

function myBindData(data, dvRef) {
    dvRef.innerHTML = '<h1>'+ data +'</h1>'
}