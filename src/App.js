import ToDo from "./ToDo.js"
import {useEffect, useState} from "react";



function App() {

const [toDo, setToDo] = useState ({});

useEffect(() => {

  getToDo();
  async function getToDo(){

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/69");
      
    const data = await response.json();

    setToDo(data);

}
}, []);


  return (
    <ToDo {...toDo}/>
  );
}

export default App;
