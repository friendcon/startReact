import {useState} from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
      event.preventDefault();
      if(todo === "") {
          return;
      }
      setTodo("");
      setTodoList(currentArray => [todo, ...currentArray]);
  };
  console.log(todolist);
  console.log(todo);
  return (
    <div>
        <h1>My To DO LIST ({todolist.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="write your to do. . ."/>
        <button>Add To Do</button>
      </form>
        <hr />
        {
            // map 사용시 key property를 설정해야한다.
            todolist.map((item, index) =>
                <li key={index}>{item}</li>
            )
        }
    </div>
  );
}

export default App;
