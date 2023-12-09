import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [editValue, setEditValue] = useState("");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  const todoHandler = (e) => {
      e.preventDefault();
    let updatedTodoList = []
    // add todo list
    if(todolist.includes(inputData)){
        alert(`${inputData} is already exits`)
        return;
    }
    if (inputData && !editValue) {
        updatedTodoList = [...todolist, inputData];
      
    } 
    // edit todo 
    else if (editValue) {
     updatedTodoList = todolist?.map((todo) => {
        if (todo === editValue) {
          return inputData;
        } else {
          return todo;
        }
      });
      
      setEditValue("")
    }
    setTodoList(updatedTodoList);
    setInputData("");
  };
  const handleDelete = (index) => {
    setTodoList(todolist.filter((_, i) => i !== index));
  };
  const handleEdit = (value) => {
    setEditValue(value);
    setInputData(value);
  };
 
  return (
    <div className="mt-6">
      <div>
        <div className="flex justify-between">
          <input
            type="text"
            name="text"
            value={inputData}
            className="border border-black "
            placeholder="todo list"
            onChange={(e) => handleChange(e)}
          />

          <button onClick={todoHandler} className="border border-black ">
            {editValue ? "Update" : "Add"} Todo
          </button>
        </div>
        {todolist?.map((item, index) => {
          return (
            <div key={index}>
              <ul>
                <li className="flex flex-row justify-between">
                  <div>{item} </div>
                  <div>
                    <button
                      className="border border-black"
                      onClick={(e) => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="border border-black "
                      onClick={(e) => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
