import ToDo from "./ToDo.js"

function App() {

  const toDo = {
    UserId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  return (
    <div className="App">
 
  <ToDo {...toDo} />
  <ToDo
  UserId={toDo.UserId}
  id={toDo.id}
  title={toDo.title}
  completed={toDo.completed}
  />
  
    </div>
  );
}

export default App;
