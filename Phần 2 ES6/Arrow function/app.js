// Cách viết thường
    function logger(log){
        console.log(log)
    }
    logger('loggerrr')
    // hoặc Expertion function
    const logger2 = function (log){
        console.log(log)
    }
    logger2('loggerrr')
    // Bây giờ ta sẽ tối giản sử dụng arrow funtion
    const logger3 = (log) => {
        console.log(log)
    }
    logger3('loggerrr')


// Ví dụ sử dụng arrow funtio 
    //Cách thường

        const sum  = function(a,b){
            return a+b
        }

    //hoặc

        const sum1  = (a,b) => {
            return a+b
        }

    // hoặc còn ngắn hơn nữa

        const sum2 = (a,b) => a+b //khi không có dấu ngoặc thì đây sẽ là return luôn



// Nếu muốn retunr ra obj
    
    // Cách thường
    const sumObj = function(a,b){
        return {
            a:a,
            b:b
        }
    }
    // Dùng arrow Function
    const sum2Obj = (a,b) => {
        return {
            a:a,
            b:b
        }
    }
    // ngắn hơn
    const sum3Obj = (a,b) => ( { a:a, b:b} ) // ta nhóm lại bằng ngoặc đơn

// Nếu chỉ có một đối số ví dụ
    const logger4 = (log) => console.log(log)
        // ta có thể bỏ dấu ngoặc
        const logger5 = log => console.log(log)




//Lưu ý: arrow fuction không sử dụng được khi ta một đối tượng

//ví dụ

const Persons =function (name, sex, age){
        this.name = name;
        this.age = age;
        this.sex = sex;
}

const Duy = new Persons('Khương Duy',"Nam", 21)
console.log(Duy)

// nhưng ta sử dụng arrowfuction 
const Persons2 = (name, sex, age) => {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
const Duy2 = new Persons2('Khương Duy',"Nam", 21) // sẽ không được lúc này Persons sẽ không phải contructor
console.log(Duy2)

