// import logo from './logo.svg';
// import './App.css';
import {useState } from 'react'

// function App() {
//   const [couter,setCouter] = useState(1) // useState(1) đây ta để giá trị mặc địch là 1
//   const handlerIncreate = function(){
//       setCouter(couter+1)
//   }// khi bấm vào nút button thì chạy hàm này. setCouter là function ta truyền giá trị vào để thay giá trị mặc định
//   // khi gọi setCouter nó sẽ chạy lại thằng app
//   return (
//     <div className="App" style={{padding:20}}>
//       <h1>{couter}</h1>
//       <button onClick ={handlerIncreate}>Increate</button>
//     </div>
//   );
// }


//hoặc ta có thể truyền vào callback; function, object 

// function App() {
//   const [couter,setCouter] = useState(1)  // truyền giá trị mặc định là 1
//   const handlerIncreate = function(){
//       setCouter(function(couter){
//         return couter + 1
//       })

//       setCouter(function(couter){
//         return couter + 1
//       })

//       setCouter(function(couter){
//         return couter + 1
//       })
//   }// ta truyền vào là 1 fuction lấy đối số là giá trị ban đầu và return ra : giá trị ban đầu + 1 
//   // khi ta gọi 3 lần thì bên dưới nó vẫn thực hiện, nhưng chỉ consolog ra 1 lần 
//   console.log('test')
//   return (
//     <div className="App" style={{padding:20}}>
//       <h1>{couter}</h1>
//       <button onClick ={handlerIncreate}>Increate</button>
//     </div>
//   );
// }

// export default App;



// ta thử truyền vào Object '


function App() {
  const [couter,setCouter] = useState({
      name:'Lăng Khương Duy',
      age : 18,
      sex: 'Nam'
  })  // truyền giá trị mặc định là 1
  // const handlerIncreate = function(){
  //   setCouter({
  //     ...couter, // ta sử dụng speads để giải các giá trị object vào lại đây
  //     love: 'Yêu Hà Dung' // ta thêm giá trị vào đây
  //   })
  // }// ta truyền vào là 1 fuction lấy đối số là giá trị ban đầu và return ra : giá trị ban đầu + 1 
  // // khi ta gọi 3 lần thì bên dưới nó vẫn thực hiện, nhưng chỉ consolog ra 1 lần 

  // nếu ta muốn thực hiện logic 
  const handlerIncreate = function(){
    setCouter( function(couter1){ // ta truyền vào chính là giá trị ban đầu

      //Logic ta muốn thêm
      return  {
          ...couter1,
          love: 'Yêu Hà Dung'
      }
    })
  }


  console.log('test')
  return (
    <div className="App" style={{padding:20}}>
      <h1>{JSON.stringify(couter)}</h1>
      <button onClick ={handlerIncreate}>Add</button>
    </div>
  );
}

export default App;



//random car 
// const car = [{name: 'BMV',coin :15000000, color: 'red'},{name: 'Merceder',coin :55000000, color: 'blue'},{name: 'Lambogini',coin :69000000, color: 'White'},{name: 'Rollroyce',coin :95000000, color: 'black'}]

// function App() {
//   const [couter,setCouter] = useState('Bạn chưa có quà gì, bấm thử vào đây random xe nào')
//   const handlerClick = function(){
//     const index = Math.floor(Math.random()*car.length)
//     setCouter(car[index])
//   }
  
//   return (
//     <div className="App" style={{padding:30}}>
//       <h1>{JSON.stringify(couter)}</h1>
//       <button onClick = {handlerClick} >Random</button>
//     </div>
//   );
// }

// export default App;

