var brand =  'F8'
var couser = 'Javasript' 
function highlingt ([first, ...strings], ...value){
    return value.reduce(
        (acc, curl) => [...acc, `<span>${curl}</span>`, strings.shift()]
        ,[first]
    )
}



var html = highlingt`Học lập trình ${brand} tại ${couser} !`

console.log(html.join(''))
