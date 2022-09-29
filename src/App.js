import './App.css';
import React, { useState, } from 'react';
import {nanoid} from 'nanoid';


export default function App() {
  const[input,setInput] = useState("");
  const[taskArray,setTaskArray] = useState([]);  //{id:1,name:apple}// a b c d e
  
  const inputSetter = (event)=>{
        setInput(event.target.value);

  }
  const addTask = ()=>{
    if(input.length===0){
      alert("Enter properly")
    }
    else{
      setTaskArray((oldElements)=>{
      
          return([...oldElements,{ id: nanoid(), text: input}]) ;
    })
  }
    setInput("");
  }
  const deleteTask=(input)=>{
    setTaskArray(taskArray.filter((element)=>{
          return element.text!==input;

         
        }))
  
  }
  return (
    <div className='App'>
        <h1>To-Do List</h1>
        <br/>
        <input type="text" value = {input} onChange={inputSetter} placeholder="Add the task" />
        <br />
        <button onClick={addTask}>Add</button>
        <div>
            <ul>
               { taskArray.map((task)=>{
                  return (
                    <div style={{display:"flex"}}>
                      <li>
                    {task.text}
                    
                  </li>
                    <i style={{fontSize:"40px",marginLeft:"5px"}} className="ri-delete-bin-fill" onClick={()=>{deleteTask(task.text)}} ></i>
                       
                    </div>
                      )
                  })
                }
            </ul>
        </div>
    </div>
  )
}
