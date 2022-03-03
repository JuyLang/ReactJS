// const courses = [
//         {
//           id: 7,
//           title: "Kiến Thức Nhập Môn IT",
//           slug: "lessons-for-newbie",
//           description:
//             "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
//           image: "courses/7.png",
//           content: null,
//           video_type: "youtube",
//           video: "M62l1xA5Eu8",
//           priority: 0,
//           students_count: 49799,
//           old_price: 0,
//           price: 0,
//           is_pro: false,
//           deleted_at: null,
//           created_at: "2020-02-10T14:23:13.000000Z",
//           updated_at: "2022-01-20T07:46:40.000000Z",
//           image_url: "https://cdn.fullstack.edu.vn/f8-production/courses/7.png",
//           video_url: "https://www.youtube.com/watch?v=M62l1xA5Eu8"
//         },
//         {
//           id: 4,
//           title: 'App "Đừng Chạm Tay Lên Mặt"',
//           slug: "tool-canh-bao-so-len-mat",
//           description:
//             "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
//           image: "courses/4/61a9e9e701506.png",
//           content: null,
//           video_type: "youtube",
//           video: "r6GWbQL-qwA",
//           priority: 50,
//           students_count: 4295,
//           old_price: 0,
//           price: 0,
//           is_pro: false,
//           deleted_at: null,
//           created_at: "2020-01-10T14:23:13.000000Z",
//           updated_at: "2022-01-19T17:51:57.000000Z",
//           image_url:
//             "https://cdn.fullstack.edu.vn/f8-production/courses/4/61a9e9e701506.png",
//           video_url: "https://www.youtube.com/watch?v=r6GWbQL-qwA"
//         }
//       ];
    
//     //PostItem
    
    
//     function PostItem({courses, onClick}){
//         return(
//             <div className="post-item">  
//                 <h2 className="post-title" 
//                     onClick = { function (){
//                         onClick(courses)
//                         }
//                     }
//                 >{courses.title} </h2>
//                  <p className="post-desc">{courses.contentdesc}</p> 
//                 <p className="post-publised">video url: {courses.video_url}</p>
//             </div>
//         )   
//     }
    
//     function App(){
//         const handleClick = function(courses){
//             console.log(courses.title)
//         }
//         return(
//             <div id='Wrarper'> 
//                 {
//                     courses.map((data) => (
//                             <PostItem
//                             key = {data.id}
//                             courses = {data}
//                             onClick = {handleClick}
//                             />
//                     ))
//                 }
//             </div>
    
//         )
//     }
    
    // nhưng thực tế t làm với UL













//Bài Học DOMevent 

//ta có thể dùng method của object để làm fuctionComponent. Lưu ý: để tên giông ReactComponent ( viết hoa chữ cái đầu)

// const Form ={
//     Input(){
//         return <input/>
//     },
//     Checkbox(){
//         return <input type='checkbox'/>
//     }
// }

function Button({title,href,onClick}){



    // ta tạo biến theo quy ước để thay đổi thẻ button thành thẻ a hoặc button
    let Component = 'button'
    const props ={}
    

    if(href){
        Component = 'a'
        props.onClick = onClick
        props.href = href
    }
    if(onClick){
        props.onClick = onClick
    }
    return(
        <Component {...props}>{title}</Component>
    )// khi ta dùng spread nó tương tự onClick = onClick
}

function App(){
        
        // const type = 'Input'
        // console.log(Form[type])// ta không thể mang cái này vào trong return 
        // // nên ta có thể 
        // const Component = Form[type]
            return(
                <div id='Wrarper'> 
                <Button
                    title='Click me'
                    href = 'https://google.com'
                    onClick = {function(){
                        console.log(Math.random())
                    }}
                />
                </div>
            )
        }
    ReactDOM.render(<App/>, document.querySelector('#root'))