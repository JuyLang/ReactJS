import logo from './logo.svg';
import './App.css';
import {useState } from 'react'

//Random 
const gifts = ['CPU i9', 'Ram 32GB', 'RBG Keyborad']

function App() {
  const [gift, setGift] =  useState()

  const renderGift = function (){
      const index = Math.floor(Math.random()*gifts.length)
      console.log(gifts[index])
      setGift(gifts[index])
  }
  return (
    <div className="App" style={{padding:30}}>
      <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick ={renderGift}>Add</button>
    </div>
  ); }

export default App;



// One-way binding   " ràng buộc 1 chiều"
  //chỉ thay đổi giao diện
//Two-way Binding " ràng buộc 2 chiều"
  // vưa thay đổi giao diện và dữ liệu


  import logo from './logo.svg';
  import './App.css';
  import {useState } from 'react'
  
  
  // One-way binding   " ràng buộc 1 chiều"
    //chỉ thay đổi giao diện
  //Two-way Binding " ràng buộc 2 chiều"
    // vưa thay đổi giao diện và dữ liệu
  
  
  function App() {
    const [username,setName] = useState('')
    const [password,setPass] = useState('')
    console.log(username)
    console.log(password)
    const handlerSumbit = function(){
      //Call API
      console.log({
        username,
        password
      })
    }
    return (
      <div style={{padding:30}}>
        
        <input
          value={username}
          onChange = {(e) => {
          return setName(e.target.value)
        }} />
  
        <input
          value={password}
          onChange = {(e) => {
          return setPass(e.target.value)
        }} />
  
        <button onClick = {handlerSumbit} > Submit</button>
      </div>
    );
  }
  
  export default App;
  //Todolist
  
  
  
  


