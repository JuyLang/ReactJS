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
            // Cách 1
                // course.map(function(data){
                //     return <li>{data.name}</li>
                // })

            // Cách 2 rút gọn hơn

                // course.map((data)=>{
                //     return <li>{data.name}</li>
                // })

            //rút gọn nữa
                course.map( data => <li> {data.name}</li> )

            
        }  
            </ul>
ReactDOM.render(ul, root )

// khi ta sử dụng ta nên thêm Key vào 


// Xử lí khi ta sử dụng render 2 element ta sẽ không được
// Lúc này ta dùng thẻ Div để bao 2 thẻ 

// bản chất JSX là chuyển sang React.createElement. Lúc này ta không thể thêm 2 React.createElement được

// const jsx  =  <div>
//     <h1></h1>
//     <h2></h2>
// </div>
// Nhưng cách này xấu.

// Ta sử dụng React.Fragment 

const jsx = ( 
    <React.Fragment>
        <h1>heading1</h1>
        <h2>heading2</h2>
    </React.Fragment>
)
ReactDOM.render(jsx, root)
// bản chất nó là chuyển sang thế này
    // const jsx = React.createElement(
    //     React.Fragment,
    //     null,
    //     React.createElement('h1', null, 'heading1'),
    //     React.createElement('h1', null, 'heading2')
    // )
React.render()