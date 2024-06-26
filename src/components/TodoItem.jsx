
import CrossIcon from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";
import React from "react";

const TodoItem = React.forwardRef(({ todo, removeTodo, updateTodo, ...props}, ref) => {
  const { id, title, completed } = todo;

  return (
    <article {...props} ref={ref} className="flex  gap-4 py-4 border-b-gray-400 border-b px-4 dark:bg-gray-800 transition-all duration-1000 ">
      <button
        className={`w-5 h-5 flex-none ${completed ? "flex  items-center justify-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block rounded-full border-2"}`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p className={`text-gray-600 grow dark:text-gray-400 ${completed && "line-through"}`}>
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
})

export default TodoItem;
