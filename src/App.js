import React,{useState} from 'react'
import './App.css';
import {AiOutlineDelete} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs'

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDescription,setNewDescription] = useState("");
  const handleAddTodo = () =>{
    let newTodoItem = {
      title:newTitle,
      description:newDescription
    }
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
  }

  return (
    <div className="App">
      <h1>Meus afazeres</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="What's the task title ?"/>
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="What's the task description ?"/>
          </div>
          <div className="todo-input-item">
            <label>Title</label>
            <button type="button" onClick={handleAddTodo} className="primaryBtn">Add</button>
          </div>
        </div>

        <div className="btn-area">
          <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
          <button className={`secondaryBtn ${isCompleteScreen===true &&  'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>
        <div className="todo-list">
            <div className="todo-list-item">
              <div>
              <h3>Task 1</h3>
              <p>Description</p>
              </div>
              <div>
              <AiOutlineDelete className='icon' />
              <BsCheckLg className='check-icon' />
            </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;
