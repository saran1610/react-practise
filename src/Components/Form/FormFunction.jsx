import React from "react";
import { useState } from "react";

function FormFunction() {
  const [taskname, settaskname] = useState("");
  const [taskdep, settaskdep] = useState("");
  const [submit, setsubmit] = useState(false);
  const [checkbox, setcheckbox] = useState(false);
  const [display, setdisplay] = useState([]);

  let taskdisplay = (event) => {
    // console.log(event.target.value,event.target.name)
    if (event.target.name == "name") {
      settaskname(event.target.value);
    } else if (event.target.name == "dep") {
      settaskdep(event.target.value);
    } else {
      setcheckbox(!checkbox);
    }
  };

  let submitfun = (event) => {
    event.preventDefault();

    setsubmit(true);
    if (taskname == "" || taskdep == "") return;

    var displayout = { taskname, taskdep, checkbox };
    setdisplay([...display, displayout]);
    settaskname("");
    settaskdep("");
    setcheckbox(false);

    // display.push(displayout)
    console.log(display);
  };

  // let templist=display;
  // templist.push(taskname);
  // setdisplay(templist);
  // settaskname("")
  // console.log(templist)

  // setdisplay([...display,taskname])
  //  settaskname("")
  // console.log(display)

  return (
    <div>
      <form onSubmit={submitfun}>
        <input
          type="text"
          name="name"
          placeholder="taskname"
          value={taskname}
          onChange={taskdisplay}
        />
        <br />
        {taskname == "" && submit && <div>taskname is required</div>}
        <input
          type="text"
          name="dep"
          placeholder="taskdep"
          value={taskdep}
          onChange={taskdisplay}
        />
        <br />
        {taskdep == "" && submit && <div>taskdep is required</div>}
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          value={checkbox}
          onChange={taskdisplay}
        />{" "}
        <br />
        <label htmlFor="checkbox">isCompleted</label>
        {/* {setcheckbox=="" && submit && <div>taskdep is required</div>} */}
        <button type="submit">submit</button>
      </form>
      <h3>list</h3>
      <ol>
        {display.map((item, i) => (
          <li key={i}>
            {item.taskname} --- {item.taskdep} -----
            {item.checkbox ? "yes" : "no"}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default FormFunction;
