import React, { useState } from "react";
import List from "./List";

function Todo() {
  const [todo, settodo] = useState("");
  const [todolist,settodolist]=useState([]);

  const todolistchange = (event) => {
    settodo(event.target.value);
    // console.log(todo)
  };
 const submitfun = (event) => {
    event.preventDefault();
    // settodolist([...todolist,todo])
    // settodo("")
    // console.log(todolist)
    let templist=todolist;
    templist.push(todo);
    settodolist(templist);
    settodo("")
    console.log(templist)
  
  };
  return (
    <div>
      <form onSubmit={submitfun}>
        <input type="text" value={todo} onChange={todolistchange} />
        <button type="submit">Add</button>
      </form>
      {todolist.map((item)=>
      <List key={item} name={item}/>
        // <h2>{item}</h2>
      )}
    </div>
  );
}

export default Todo;
