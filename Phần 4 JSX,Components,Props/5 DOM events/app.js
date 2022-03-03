// // //bài tập buổi trước

// const courses = [
//     {
//       id: 7,
//       title: "Kiến Thức Nhập Môn IT",
//       slug: "lessons-for-newbie",
//       description:
//         "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
//       image: "courses/7.png",
//       content: null,
//       video_type: "youtube",
//       video: "M62l1xA5Eu8",
//       priority: 0,
//       students_count: 49799,
//       old_price: 0,
//       price: 0,
//       is_pro: false,
//       deleted_at: null,
//       created_at: "2020-02-10T14:23:13.000000Z",
//       updated_at: "2022-01-20T07:46:40.000000Z",
//       image_url: "https://cdn.fullstack.edu.vn/f8-production/courses/7.png",
//       video_url: "https://www.youtube.com/watch?v=M62l1xA5Eu8"
//     },
//     {
//       id: 4,
//       title: 'App "Đừng Chạm Tay Lên Mặt"',
//       slug: "tool-canh-bao-so-len-mat",
//       description:
//         "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
//       image: "courses/4/61a9e9e701506.png",
//       content: null,
//       video_type: "youtube",
//       video: "r6GWbQL-qwA",
//       priority: 50,
//       students_count: 4295,
//       old_price: 0,
//       price: 0,
//       is_pro: false,
//       deleted_at: null,
//       created_at: "2020-01-10T14:23:13.000000Z",
//       updated_at: "2022-01-19T17:51:57.000000Z",
//       image_url:
//         "https://cdn.fullstack.edu.vn/f8-production/courses/4/61a9e9e701506.png",
//       video_url: "https://www.youtube.com/watch?v=r6GWbQL-qwA"
//     }
//   ];

// // //PostItem


// function PostItem(props){
//     return(
//         <div className="post-item">  
//             <h2 className="post-title">{props.title} </h2>
//              <p className="post-desc">{props.contentdesc}</p> 
//             <p className="post-publised">video url: {props.video_url}</p>
//         </div>
//     )   
// }

// function App(){
//     return(
//         <div id='Wrarper'> 
//             {
//                 courses.map((data) => (
//                         <PostItem
//                         title ={data.title}
//                         desc = {data.description}
//                         video_url = {data.video_url}
//                         />
//                 ))
//             }
//         </div>
// //         // nếu có nhiều props thì cho hẳn object vào

// //         //     <div id='Wrarper'> 
// //         //     {
// //         //         courses.map((data) => (
// //         //                 <PostItem
// //         //                 key ={data.id}
// //         //                 courser = {data}
// //         //                 />
// //         //         ))
// //         //     }
// //         // </div>

// //         //và 
// //         // function PostItem({props}){
// //         //     return(
// //         //         <div className="post-item">  
// //         //             <h2 className="post-title">{props.title} </h2>
// //         //              <p className="post-desc">{props.contentdesc}</p> 
// //         //             <p className="post-publised">video url: {props.video_url}</p>
// //         //         </div>
// //         //     )   
// //         // }
// //     )
// // }
// // ReactDOM.render(<App/>, document.querySelector('#root'))


// // // Xử lí DOMevent


// function App(){
//         return(
//             <div id='Wrarper'> 
//                <div>
//                    <button 
//                         onClick = { 
//                             function(){
//                             console.log('Click me conso')  
//                             }
//                         }
//                     >
//                     Click me
//                     </button>
//                </div>
//             </div>
//         )
//         // Trong React Onclick chuyển thành onClick
// }

// ReactDOM.render(<App/>, document.querySelector('#root'))