var array = ['JavaScript ', 'PHP', 'Ruby']
    // var a =  array[0]
    // var b =  array[1]
    // var c =  array[2]
    // console.log(a, b, c) // bình thường ta làm như vậy

//ta coi array là 1 hộp, chứa các phần tử nên ta dùng destructring (Phân rã) : lấy các phần từ mà không cần lấy theo index


var [a,b,c] = array;
console.log(a, b, c)
// nếu muốn lấy a và c 
    // var [a,,c] = array;
    // console.log(a,c)

// toán tử rest

    // bây giờ ta lấy 1 phần tử của mảng , và các đoạn đằng sau 

var [a1, ...rest]  = array; 
console.log(a1)
console.log(rest)
// lúc này rest sẽ là mảng còn lại 



// sử dụng với object
var course = {
    name: 'Javascript',
    price: 1000
}

// var {name , price } = course // lấy ra phải có tên giống với key
// console.log(name)
// console.log(price)


// sử dụng rest

var { name , ...rest} = course
console.log(name)
console.log(rest) // đây là sẽ là mảng còn lại 

// ví dụ ta có thể xóa một object mới mà không dùng delete



var person = {
    name:'Lăng Khương Duy',
    age: 10,
    sex: 'Nam'
}
// Xóa key age xong object person mà không sử dụng delete

var {age, ...newObject} = person
console.log(newObject)


// bây giờ trong object có object con
var person2 = {
    name:'Lăng Khương Duy',
    age: 10,
    sex: 'Nam',
    childer: {
        name : 'Reactjs'
    }
}

//bây giờ ta sẽ lấy name trong childer
var {name: parentName,age,sex,childer:{name}} = person2 // ta đổi tên name ở object cha vì khi ta gọi thằng con nó sẽ đè lên cha
console.log(name)


//ta có thể dùng rest cho function

function logger(...param){
    console.log(param)
}
logger(1,2,3,4,5,6,4,8,6,8)
// ta thấy ta truyền bao nhiêu tham số cũng được, và dưới dạng mảng 


// ***** Ta thấy ...rest dùng được trong Arayy, Fuction, Object 