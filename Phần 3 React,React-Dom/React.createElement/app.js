// React.createElement() là gì 

//1.  React.createElement()  -. React element
//2. So sánh với docment.createElement
//3. Thay đổi id, className, style,...
//4. Thêm text
//5. Tạo 
    // <h1 title= 'Heloo'> </h1>

// Vào bài
const root = document.querySelector('#root')
//DOM
    // const h1Dom = document.createElement('h1')
    // h1Dom.innerText = 'Dom Create Element'
    // h1Dom.className = 'Heading'
    // h1Dom.title = 'Hello'
    // document.body.appendChild(h1Dom)

//React -> ReactDom

    // React.createElement(type, props, chidlrean, n)

    // props viết tắt của properties(tính chất) ta muốn truyền gì ta truyền vào props
    const h1React = React.createElement('h1', {
        title: "Hello",
        className: 'Heading'
    }, 'Hello')

    // ta không dùng innextText vì react không sử dụng, sử dụng ở giữa ta dùng
    // Không thể render vì chưa có DomReact

// console.log(h1Dom)
// console.log(h1React)
ReactDOM.render(h1React, root)

//6. Tạo
/*      <ul>
            <li>Java Script</li>
            <li>ReactJS</li>
        </ul> 
*/

//Dom
    // const ulDOM = document.createElement('ul')
    // const liDOM1 = document.createElement('li')
    // const liDOM2 = document.createElement('li')
    // liDOM1.innerText = "JavaScript"
    // liDOM2.innerText = "ReactJS"
    // ulDOM.appendChild(liDOM1)
    // ulDOM.appendChild(liDOM2)
    // document.body.appendChild(ulDOM)

//ReactJS
    const ulReactJS = React.createElement(
        'ul', //type
        // null, // props
        // bây giờ ta muốn thêm id và style cho thẻ ul này . ta thêm vào props
        {
            title: 'ul-title',
            id: 'ul-id'
        },
        React.createElement(
            'li', {}, 'Javascript'
        ),
        React.createElement(
            'li', {}, 'ReactJS'
        )
    )

// console.log(ulDOM)
// console.log(ulReactJS)

// ReactDOM.render(ulReactJS,root)
ReactDOM.render(ulReactJS, root)


//Bài tập 


// 7.Tạo 
        // <div class="post-item">
        //     <h2 title="Học ReactJS tại F8">Học ReactJS</h2>
        //     <p>Học ReactJS từ cơ bản đến nâng cao </p>
        // </div>

    // DOM
    // const divDOM = document.createElement('div')
    // divDOM.className = 'post-item'
    // const h2DOM = document.createElement('h2')
    // h2DOM.innerText =  'Học ReactJS'
    // h2DOM.title = 'Học ReactJS tại F8'
    // const pDOM = document.createElement('p')
    // pDOM.innerText = 'Học ReactJS từ cơ bản đến nâng cao'
    // divDOM.appendChild(h2DOM)
    // divDOM.appendChild(pDOM)
    // document.body.appendChild(divDOM)

    //React
    const divReact = React.createElement(
        'div',
        {
            className : 'post-item'
        },
        React.createElement('h2',{title : 'Học ReactJS tại F8'},'Học ReactJS'),
        React.createElement('p',{},'Học ReactJS từ cơ bản đến nâng cao')
    )
// console.log(divReact)
// ReactDOM.render(divReact, root)