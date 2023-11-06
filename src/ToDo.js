import { useState } from "react";

function ToDo(props) {
 
  const [runčuks, setRunčuks] = useState(props.completed);
  
  function handleChange(event) {
    setRunčuks(event.target.checked);
  }
  return (
    <>
      <p>UserId: {props.userId}</p>
      <p>Id: {props.id}</p>
      <p>{props.title}</p>
      <input type="checkbox" checked={runčuks} onChange={handleChange}></input>
    </>
  );
}

export default ToDo;