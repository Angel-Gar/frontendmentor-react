import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
const App = () => {
  return (
    <div
      className="min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')]
     bg-no-repeat bg-contain bg-gray-300"
    >
      <header className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">
            ToDo
          </h1>
          <button><MoonIcon/></button>
        </div>

        <form
          className="flex gap-4 items-center bg-white rounded-md
         overflow-hidden py-4 px-4 mt-4"
        >
          <span className="rounded-full border-2 w-5 h-5"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="create a new ToDo..."
          />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="rounded-md bg-white [&>article]:px-4">
          <article className="flex  gap-4 py-4 border-b-gray-400 border-b px-4">
            <button className="flex-none inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="text-gray-600 grow">Complete online JS</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex  gap-4 py-4 border-b-gray-400 border-b px-4">
            <button className="flex-none inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="text-gray-600 grow">Complete online JS</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex  gap-4 py-4 border-b-gray-400 border-b px-4">
            <button className="flex-none inline-block rounded-full border-2 w-5 h-5"></button>
            <p className="text-gray-600 grow">Complete online JS</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className=" flex justify-between py-4 px-4">
            <span className="text-gray-400">5 items left</span>
            <button className=" text-gray-400">Clear completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto mt-8 px-4">
        <div className=" flex justify-center gap-4 rounded-md bg-white p-4 ">
          <button className=" hover:text-blue-600">All</button>
          <button className=" hover:text-blue-600">Active</button>
          <button className=" hover:text-blue-600">completed</button>
        </div>
        
      </section>

      <p className="text-center mt-8">Drag and drop to reorder list</p>
    </div>
  );
};

export default App;
