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
 
  <ToDo />
  
    </div>
  );
}

export default App;
