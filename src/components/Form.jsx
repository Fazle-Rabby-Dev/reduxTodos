import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../features/todos/todosSlice'
import {push, ref, set } from "firebase/database";
import { db } from '../firebessConfig';
import { Oval} from 'react-loader-spinner'


const Form = () => {
    const [todoText, setTodoText]= useState('')
    const [Loader,setLoader] = useState (false)
    const dispatch= useDispatch()
    const handleChange = (e) => {
        setTodoText (e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
         setLoader (true)
        if(todoText.trim() !== ''){
              set(push (ref(db, 'todos/')), {
            todos: todoText,
          });
          setTodoText('')
          setTimeout(() => {
             setLoader (false)
          }, 3000);
        }
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={todoText} onChange={handleChange} type='text' placeholder='Add todo'/>
            {Loader ?
                <Oval
                visible={true}
                height="30"
                width="30"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                strokeWidth='5'
                />
            : 
             <button type='submit'>Add</button>
            }
            
        </form>
    </div>
  )
}

export default Form