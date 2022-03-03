// Ta thêm thư viện 
// <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
//   <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

    // ta sử dụng reactdom để render 
    // là cầu nối giữa react và dom


    //React Navtive -> iOS,Android . Sinh ra để viết các mã máy chạy 
    // là cầu nối giữa React và Navtive 


    // Chúng ta tách React và Dom vì: từ xưa khi còn chung thì có thể dùng, nhưng khi React Navive ra đời
    // nên bóc tách ra để sử dụng dễ hơn 

//Render UL


//React
const postItem= React.createElement(
    'div',
    {
        className : 'post-item'
    },
    React.createElement('h2',{title : 'Học ReactJS tại F8'},'Học ReactJS'),
    React.createElement('p',{},'Học ReactJS từ cơ bản đến nâng cao')
)
console.log(postItem)


//get root
const root = document.querySelector('#root')
// React-DOM
ReactDOM.render(postItem, root)

// ReactDOM.render ( ) bên trong có cái tham số : element ( element mới ta muốn thêm),  container( elementta muốn thêm vào)