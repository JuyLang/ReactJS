    // function logger(...rest){
    //     console.log(rest)
    // }
    // logger(1,2,3,4,5,6)

// bây giờ ta sẽ sử dụng rest trong array như bài trước
    // var Arrayy = [ 1,2,3,4,5]
    // var [a,b,...rest] = Arrayy
    // console.log(a)
    // console.log(b)
    // console.log(rest)

// Sử dụng hàm 
    function Logger(a, b, ...rest){
        console.log(a)
        console.log(b)
        console.log(rest) //'Python', "Asm", 'Ruby'
    }
    Logger('Java', 'C++', 'Python', "Asm", 'Ruby')
//Object 

function Logger2({name, ...rest}){
    console.log(name)
    console.log(rest)
}
Logger2({
    name: 'Javasacript',
    price: 1000,
    description: 'Description content'
})
//Array

function Logger3([a, ...rest]){
    console.log(a)
    console.log(rest)
}
Logger3([1,2,3,4])




// Spread 
var Array3 = ['Javascript', 'PHP', 'Ruby']
var Array4 = ['Reactjs', 'Dart', 'Python']
//yêu cầu ta nối 2 mảng với nhau
var Array5 = [...Array4,...Array3]

// toán tử spread là lại bỏ 2 đầu: nếu là mảng thì mất
// ví dụ: Array4 = ['Reactjs', 'Dart', 'Python'] => ...Array4 = 'Reactjs', 'Dart', 'Python'

console.log(Array5)


// nối Object

var Object1 ={
    name:'Javascript'
}
var Object2 ={
    price:1000
}
var Object3 ={
    ...Object1,
    ...Object2
}

// lúc này 
    // var Object1 ={
        // name:'Javascript'
    // }

    // => ...Object1 = name:'Javascript'


console.log(Object3)


// trong thực tế 

var defaultConfig = {
    api: "https:caobangfood.com/sanpham",
    apiVersion: 'v1',
    other: 'Other',
    //
    //
    // còn nhiều đang ví dụ
    //

}

// bây giờ ta có một api khác giống với object trên nhưng thay đổi url api

var expesion = {
    ...defaultConfig,
    api: "https:caobangfood.com/banhang" // lúc này 2 key đang trùng nhau, nhưng bị thằng này đè lên
}

console.log(expesion)


// kết hợp rest và spreads

var khoahoc = Array5

function Output(name, ...rest){ 
    console.log(name) //Reactjs
    // ta sẽ in lần lượt các khóa học trong mảng rest
    for(let i = 0; i <= rest.length;i++){
        console.log(`Khóa Học : ${rest[i]} `)
    }
}

Output(...khoahoc) // Đây là (speads) Lúc này truyền vào không phải là mảng mà là: 'Javascript', 'PHP', 'Ruby',....