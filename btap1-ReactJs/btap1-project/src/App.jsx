import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { useState } from 'react';
import $ from 'jquery'; 

function App() {
  const[data, setData] = useState('')
  const[cout,setCout] = useState(0)
  function addData(){
   let dataInput = document.querySelector('.input-Data').value 
   let dataInput1=document.querySelector('.ul-Data')
  //  let Li = document.createElement('li')
  //  Li.innerText = dataInput
  //  dataInput1.append(Li)
  dataInput1.innerHTML += `<li>${dataInput}</li>`
    setData({})
  }
  return (
    <div className="App">
      <Header></Header>
      <input className='input-Data' type="text" placeholder='Nhập data' />
      <button  onClick={addData}>Click</button> 
      <ul className='ul-Data'></ul>
      <button  onClick ={()=>setCout(cout =>cout -1)}>-</button>
      <button  onClick ={()=>setCout(cout =>cout +1)}>+</button>
      <p>{cout}</p>
    </div>
  );
}

export default App;
