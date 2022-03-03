        // <!-- <ul>
            // <li>JavaScript</li>
            // <li>ReactJS</li>
        // </ul>


// const root = document.querySelector('#root')
// const ul = React.createElement(
//     'ul',
//     {},
//     React.createElement('li',{},'Javascript'),
//     React.createElement('li',{},'ReactJS')
// )
// console.log(ul)
// ReactDOM.render(ul, root )


// JSX là javascript xml

//HTML cũng chính là xml
//2. Live Demo https://bit.ly/2VOIMN7
//3. JSX không phải HTML
    //cần có Javascript, Babel để dùng JSX
//4. JSX và React-DOM


// 2.
    // Vd JSX
    // const ul =  <ul>
    // <li>JavaScript</li>
    // <li>ReactJS</li>
    // </ul>
    
// lúc này ta có Babel tự chuyển JSX thành React
    // var ul = 
    // React.createElement("ul", 
    // null,
    // React.createElement("li", null, "JavaScript"),
    // React.createElement("li", null, "ReactJS")
    // );

//Lưu ý:
// ta có thể đan xe javascript vào jsx bằng cách. Thêm {javascript}

    //const liText = 'reactjs'
    // const ul =  <ul>
    // <li>JavaScript</li>
    // <li>{liText}</li>
    // </ul>
    
// lúc này ta có Babel tự chuyển JSX thành React
    // var liText = 'reactjs';
    // var ul = 
    // React.createElement("ul", 
    // null,
    // React.createElement("li", null, "JavaScript"),
    // React.createElement("li", null, liText)
    // );

const root = document.querySelector('#root')
// const liText = 'ReactJSssss'
// const ul = <ul>
//          <li>JavaScript</li>
//          <li>{liText}</li>
//         </ul>
// ReactDOM.render(ul, root )
// ta phải thêm thư viện mới dùng ReactDOM cho JSX được
// ta cũng phải để type = babel
// <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

// bài tập
var course = [
    {
        name:'HTML, CSS'
    },
    {
        name:'Reponsive'
    },
    {
        name:'ReactJS'
    }
]
const ul = <ul>
        {
            course.map((course)=>{
                return <li>{course.name}</li>
            })}  
        </ul>
ReactDOM.render(ul, root )


console.log(<h1>Hi anh em 😍</h1>)