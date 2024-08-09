import React from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-200">
      <div className="flex items-center text-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(index)}
          className="mr-2 rounded"
        />
        <p className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </p>
      </div>
      <button
        onClick={() => removeTodo(index)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
      >
        Delete Task
      </button>
    </li>
  );
}

export default TodoItem;