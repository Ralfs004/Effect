import ToDo from "./ToDo"
import comment from "./Comment"
import {useEffect, useState} from "react";



function App() {

const [toDo, setToDo] = useState ({});
const [loading, setLoading] = useState(true);
useEffect(() => {

  getToDo();
  async function getToDo(){

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/69");
      
    const data = await response.json();

    setToDo(data);
    setLoading(false);
}
}, []);

  return (
    <>
    {loading ? <p>loading...</p> : <ToDo {...toDo}/>}
    <Comment />
    </>
  );
}

export default App;
