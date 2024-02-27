import React, { useState } from "react";
import "./App.css";

function App() {
  // Hooks
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedItem, setEditedItem] = useState("");

  // Add a new item
  const addTodo = () => {
    if (!newItem) {
      alert("Enter a new item!");
      return;
    }
    // console.log(todo);
    setTodo([...todo, newItem]);
    setNewItem("");
  };

  // Delete an item
  const deleteTodo = (indexDelete) => {
    const newList = todo.filter((_, index) => index !== indexDelete);
    setTodo(newList);
  };

  // Edit an item
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedItem(todo[index]);
  };

  const handleSaveEdit = () => {
    const updatedTodo = [...todo];
    updatedTodo[editIndex] = editedItem;
    setTodo(updatedTodo);
    setEditIndex(null);
    setEditedItem("");
  };

  return (
    <div className="App">
      <h1> TODO List </h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addTodo} className="add-button">
          Add
        </button>
      </div>
      <div>
        <ul>
          {todo.map((todos, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedItem}
                    onChange={(e) => setEditedItem(e.target.value)}
                  />
                  <button onClick={handleSaveEdit} className="save-button">
                    Save
                  </button>
                </>
              ) : (
                <>
                  {todos}
                  <button
                    onClick={() => handleEdit(index)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
