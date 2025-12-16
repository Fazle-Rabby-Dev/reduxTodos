import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getDatabase, ref, onValue } from "firebase/database";

const Todo = () => {
    const db = getDatabase();
    const todos =useSelector((state)=> state.todos)
    const [allTodo, setAllTodo] = useState ([])

    useEffect (() => {
          const starCountRef = ref(db, 'todos/');
    onValue(starCountRef, (snapshot) => {
        let arr = []
       snapshot.forEach (item => {
         arr.push ({...item.val(), todosId: item.key})
       })
       setAllTodo (arr)
    });

    },[])
    console.log (allTodo)

  return (
    <div>
        <ul>
            {
                allTodo.map(item => (
                    <li>{item.todos}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todo