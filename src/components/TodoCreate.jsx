import { useState } from "react";

const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState('');

    const handleSubmitTodo = (e) => {
      e.preventDefault();
      
      if(title.trim().length > 0){
        createTodo(title);
        setTitle("");
      }

      setTitle("")

    }

    return(
        <form
          onSubmit={handleSubmitTodo}
          className="flex gap-4 items-center bg-white rounded-md
         overflow-hidden py-4 px-4 transition-all duration-1000 dark:bg-gray-800 "
        >
          <span className="rounded-full border-2 w-5 h-5"></span>
          <input
            className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000"
            type="text"
            placeholder="create a new ToDo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
    )
}

export default TodoCreate;