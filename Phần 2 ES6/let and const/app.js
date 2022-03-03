// hai từ khóa này thay thế var để 
// các trình duyệt nào chưa hỗ trợ es6 thì k hỗ trợ let và const

// phân biệt giữa var let const
    //1. khác nhau về scope
    //2. khác nhau về hosssting
    //3. assignment const/ var,let

    // 1.Code block: ta sử dụng liên tục: ví dụ if elsse, forr, function,....
    // ta có thể viết tắt if 
        // if(true){
        //     console.log("test if ")
        // }
        // => có thể làm tương tự
        // {
        //     console.log("test if ")
        // }

        // 1.2
            {
                    {
                        var couser = 'Javascipt'

                    }

                    {
                        console.log(couser) // ta có thể truy cập ngoài scoppe của nó(var,) 
                                            // ta không thể truy cập ngoài scoper của nó ( const, let)
                    }
            }

        //1.3 Hossting
        
        // var a = 1 // đây hỗ trợ hossting: đưa lên đầu nó sẽ viết lại: var a; a = 1 
        
        a = 1
        var a
        console.log(a) // có thể được vì lúc này var sẽ hỗ trợ khai báo a lên đầu tiên

        // b = 2 
        // const b;
        // console.log(b)  //sẽ không được vì const và let không hỗ trợ hossting
        

        // 2. assignment'

        let c = 1
        c = 100
        console.log(c) // ta có thể gán toán tử = cho chính nó thì được (let và var)

        // nhưng với const thì không
        // const x = 1
        // x = 100
        // console.log(x) //const không cho gán toán tử = cho chính nó (error) 


        // nhưng vd ta có thể thay đổi thuộc tính dù dùng const, let, var ( tham chiếu tham trị)

    

