//Props trong JSX

    // <YourComponent
    //     propsName1='String literals'
    //     propsName2= {expression} // biểu thức Không truyền if else, switch case,..
    // />

    // Props default to true

    //Spread/Rest props

    //Childern props
        //<YourComponent>  String literal </YourComponent>
         //<YourComponent> {expression} </YourComponent>

    //Render props

function PostItem({label,...rest}){
        return(
            <div className="post-item">
                <label>{label}</label>
                < input {...rest}/>
            </div>
        )  //  < input {...rest}/> đây là truyền vào spread
}
            
function App(){
        return(
            <div id='Wrarper'> 
               <PostItem
               label='Đây là input'
               type = 'text'
               placeholder = 'enter name..'
               
               />
             </div>)
}
ReactDOM.render(<App/>, document.querySelector('#root'))