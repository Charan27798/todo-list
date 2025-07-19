
import { useState } from 'react'
import './App.css'
3
function App() {
  
const [TodoList,SetTodoList] = useState([]);
const [InputValue,SetInputValue] = useState(null);
const [EditIndex,SetEditIndex] = useState(null);

const HandleAddTodo = () => 
{
  if (InputValue.trim() !== '') {
    if (EditIndex !== null) 
    {
      const updatedList = [...TodoList];
      updatedList[EditIndex] = InputValue;
      SetTodoList(updatedList);
      SetEditIndex(null);
    } else {
      SetTodoList([...TodoList, InputValue]);
    }
    SetInputValue('');
  } else {
    alert("Please enter a valid todo.");
  }
};

const HandleDeleteTodo = (index) =>
{
  const updatedList = [...TodoList];
  updatedList.splice(index,1);
  SetTodoList(updatedList);

}

const HandleEditTodo = (index)=>
{
   SetInputValue(TodoList[index])
   SetEditIndex(index);
}

  return (
    <div>
                  <h1> Todo App...</h1>
<<<<<<< HEAD
                  <h1> Hi....vamshi</h1>
=======
                  <h1> Hi.charan.............</h1>
>>>>>>> main
                  <input
                        type='text'
                        placeholder='Enter Your Todo here...'
                        value={InputValue}
                        onChange={(e)=>SetInputValue(e.target.value)}
                  
                  />

                  <button onClick={HandleAddTodo}>{EditIndex !== null ? 'Edit Todo' : 'Add Todo'}</button>
                <ul>
                  {
                    TodoList.map((Todo,index)=>(

                       <li key={index}>
                           {Todo}
                            <button onClick={()=>HandleDeleteTodo(index)}>Delete</button>
                            <button onClick={()=>HandleEditTodo(index)}>Edit</button>
                       </li>

                    ))
                  }
                </ul>
    </div>
  )
}

export default App
