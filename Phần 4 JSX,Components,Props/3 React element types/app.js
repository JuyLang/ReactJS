// const reactElement = React.createElement(

// )


// 1.React element hỗ trợ type: String, function, class

//     - Wrapper
//         Headers -> Headers Component 
//         Content -> Content Component 
//         Footer  -> Footer  Component 

// 2. Biểu Diễn đơn giản hơn jsx

// Lưu ý: hiện tại chỉ dùng function Component nhiều hơn


//  <div class="Warpper">
//             <div class="Header">Header</div>
//             <div class="Content">Content</div>
//             <div class="Footer">Footer</div>
//         </div> 
//Khi ta code sẽ có nhiều Header, Content, Footer nên ta có thể sử dụng lại

//Function
function Header(){
    return  <div class="Header">new Header</div>

    // hoặc để thế này cho đẹp

    // return  ( 
    // <div class="Header">Header</div>
    // )
} 
// Lưu ý tên function phải viết Hoa chữ đầu trong React
// Ta thêm function vào JSX <Header/>

    // => Bản chất function Header() {
    //  React.createElement(
    //     "div",
    //     { "class": "Header" },
    //     "new Header"
    // )};


//class
class Content extends React.Component{
    render(){
        return (
             <div className="Content">Content</div>
        ) 
    }
}

const Warpper = <div class="Warpper">
            <Header/>
            < Content/>          
            <div class="Footer">Footer</div>
        </div> 

        ///var Warpper = React.createElement(
        //     "div",
        //     { "class": "Warpper" },
        //     React.createElement(Header, null),
        //     React.createElement(Content, null),
        //     React.createElement(
        //         "div",
        //         { "class": "Footer" },
        //         "Footer"
        //     )
        // );
ReactDOM.render(Warpper, document.querySelector('#app'))