import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

/* const InitialStateTodos = [
  { id: 1, title: "Go to the gym", completed: true },
  { id: 2, title: "Progress on the React course", completed: false },
  { id: 3, title: "Exercise myself", completed: true },
  { id: 4, title: "Take out the trash", completed: false },
  { id: 5, title: "Take a shower", completed: false },
  { id: 6, title: "Dinners", completed: true },
];
 */

const InitialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(InitialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div
      className="min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] 
     bg-no-repeat bg-contain  transition-all duration-1000 
      bg-gray-300 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
      md:bg-[url('./assets/images/bg-desktop-light.jpg')] 
      md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] "
    >
      <Header />

      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filterTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />

        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="text-center mt-8 dark:text-gray-400">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
