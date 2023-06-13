import { useState } from "react";

const Todolist = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="box">
      <div className="container">
        <h1>Todo List!</h1>
        <input
          value={input}
          maxLength={50}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button onClick={addTodo}>Enviar</button>

        <div className="containerLista">
          <ul>
            <div className="containerLi">
              {todos.map((todo, index) => (
                <li className="lista" key={index}>
                  {todo}

                  <button onClick={() => deleteTodo(index)} className="btn">
                    X
                  </button>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
