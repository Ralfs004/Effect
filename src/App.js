import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import Comment from "./Comment";
import Post from "./Post";
import PostList from "./PostList";

function App() {
 
  const [toDo, setToDo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getToDo() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
      );
      const data = await response.json();
      setToDo(data);
      setLoading(false);
    }
    getToDo();
  }, []);

  return (
    <>
      {loading ? <p>Loading...</p> : <ToDo {...toDo} />}
      
      <PostList />
    </>
  );
}

export default App;
