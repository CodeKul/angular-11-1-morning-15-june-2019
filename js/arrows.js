setTimeout(
    function() {
        console.log(JSON.stringify(this))
    }, 1500
)

setTimeout( 
    () => console.log(JSON.stringify(this)),
    2000
)