import { useRef } from "react";

function Task({ tasks, addTask }) {
  const input = useRef();

  function handleInput() {
    if (input.current.value.trim() === "") return;
    addTask(input.current.value);
    input.current.value = ""; // clear
  }

  const fieldClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-300 hover:bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

      <button
        onClick={handleInput}
        className="px-2 py-1 my-1 bg-green-600 hover:bg-green-800 text-stone-200 rounded-sm"
      >
        + add Task
      </button>

      <input className={fieldClasses} type="text" ref={input} />

      {tasks.length === 0 ? (
        <p className="text-stone-800 mt-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <p className="text-stone-800 mb-1" key={index}>
              {task}
            </p>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Task;
