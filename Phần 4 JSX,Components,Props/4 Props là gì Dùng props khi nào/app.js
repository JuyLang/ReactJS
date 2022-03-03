//Bài tập buổi trước
// function PostItem() {
//     return (
//         <div className="post-item">
//         <img  src="https://www.ethode.com/contentAsset/image/84e3be24-58bc-499c-9d50-f8088158f11a/image/filter/Resize/resize_w/1024" alt="C#(.NET) - Tương tác với file Excel" ></img>
//         <h2 className="post-title">C#(.NET) - Tương tác với file Excel </h2>
//         <p className="post-desc">Bạn có thể dễ dàng tương tắc với excel</p> 
//         <p className="post-publised">Một ngày trước</p>
//         </div>
//     )
// }
// const postItem = (
//     <div className="posts-list">
//       <PostItem/>
//   </div>
// )
// ReactDOM.render(postItem, document.querySelector('#app'))


// Props


    //React element 
        //sử dụng giống props giống như attribute của thẻ HTML
        //2 props class, for =>Classname, htmlFor
        // phải tuân theo quy ước sẵn
    //React component 
        //sử dụng props như đối số cho Component, function
        // Tự do đặt tên props
            // đặt theo camelCase
            //có thể có cả dấu gạch ngang
        
// Chú ý: Props 'key' là props đặc biệt
        //Props cơ bản là đối số của Component 
        // => Props có thể làm bất cứ kiểu dữ liệu gì 
        // sử dụng Destructuring


function PostItem(props) {
    console.log(props) // lúc này các biến imgage, title, des,phub sẽ trong object props
    if(typeof props.calback === 'function'){
        props.calback( Math.random()*10)
    }// gọi lại function đã được truyền làm đối số

    
    return (
        <div className="post-item">  
            < img  src={props.image} ></img>
            <h2 className="post-title">{props.title} </h2>
            <p className="post-desc">{props.desc}</p> 
            <p className="post-publised">{props.publ}</p>
        </div>
    )
}

// const postItem = (
//     <div className="posts-list"> //React element 
//       <PostItem/> //React component 
//   </div>
// )
// ReactDOM.render(postItem, document.querySelector('#app'))

// Trong thực tế


    //App.js
    function App(){ //React component 
        // console.log(<PostItem  title='test'/> ) // bản chất là consolog hàm, title là đối số ( chính là props)
        return(
            <div id='Wrarper'>  
                <PostItem
                    title ='1 C#(.NET) - Tương tác với file Excel '
                    image = 'https://pbs.twimg.com/profile_images/1288101938207379457/PFi11Cb3_400x400.png'
                    desc = '1 bạn có thể dễ dàng tương tắc với excel'
                    publ = '1 Một ngày trước'
                    //ta thử cho một đối số là 1 hàm
                    calback = {(random) =>{
                        console.log('Random: ', random)
                    }}
                /> 
                 <PostItem
                    title ='2 C#(.NET) - Tương tác với file Excel '
                    image = 'https://pbs.twimg.com/profile_images/1288101938207379457/PFi11Cb3_400x400.png'
                    desc = '2 bạn có thể dễ dàng tương tắc với excel'
                    publ = '2 Một ngày trước'
                /> 

                <PostItem
                    title ='3 C#(.NET) - Tương tác với file Excel '
                    image = 'https://pbs.twimg.com/profile_images/1288101938207379457/PFi11Cb3_400x400.png'
                    desc = '3 bạn có thể dễ dàng tương tắc với excel'
                    publ = '3 Một ngày trước'
                   
                /> 

                <PostItem /> 
                <PostItem />
            </div>
        )
        // Các biến title, desc, publ đặt tên gì cũng được
        // khi gọi <PostItem />  không có đối số, props = {} trống nên k render ra gì cả
    }// để ôm toàn bộ nội dung


    //index.js để render
    ReactDOM.render(<App/>, document.querySelector('#root'))

//Lưu ý; props key không sử dụng 
        // Đối số truyền vào giống như Fuction nên ta có thể truyền Array, OBject, Function,...



// ta có thể dùng destrutring

    function PostItem2({title,image, desc, publ}) {
        // ta để các đối số truyền vào đây
        
        return (
            <div className="post-item">  
                < img  src={image} ></img>
                <h2 className="post-title">{title} </h2>
                <p className="post-desc">{desc}</p> 
                <p className="post-publised">{publ}</p>
            </div>
        )
    }
function App2(){ //React component 
    // console.log(<PostItem  title='test'/> ) // bản chất là consolog hàm, title là đối số ( chính là props)
    return(
        <div id='Wrarper'>  
            <PostItem
                title ='4 C#(.NET) - Tương tác với file Excel '
                image = 'https://pbs.twimg.com/profile_images/1288101938207379457/PFi11Cb3_400x400.png'
                desc = '4 bạn có thể dễ dàng tương tắc với excel'
                publ = '4 Một ngày trước'
            /> 
             <PostItem
                title ='5 C#(.NET) - Tương tác với file Excel '
                image = 'https://pbs.twimg.com/profile_images/1288101938207379457/PFi11Cb3_400x400.png'
                desc = '6 bạn có thể dễ dàng tương tắc với excel'
                publ = '6 Một ngày trước'
            /> 

            <PostItem
                title ='6 C#(.NET) - Tương tác với file Excel '
                image = 'https://pbs.twimg.com/profile_images/1288101938207379457/PFi11Cb3_400x400.png'
                desc = '6 bạn có thể dễ dàng tương tắc với excel'
                publ = '6 Một ngày trước'
               
            /> 

            <PostItem /> 
            <PostItem />
        </div>
    )
            }
    ReactDOM.render(<App2/>, document.querySelector('#root'))