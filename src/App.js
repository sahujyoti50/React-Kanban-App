import { useState } from "react";
function App() {
  const [todoList, setTodo] = useState([]);
  const [doingList, setDoing] = useState([]);
  const [doneList, setDone] = useState([]);
  const [input, setInput] = useState('');

  const addHandler = (input) => {
    setTodo([...todoList, {
      taskId: Math.random(),
      taskName: input
    }]);
    setInput('');
  }
  //Next
  const MoveToDoingClickHandler = (todo) => {
    const remainingArray = todoList.filter((array) => array.taskId !== todo.taskId);
    setTodo(remainingArray);
    setDoing([...doingList, todo]);
  }

  const MoveToDoneClickHandler = (doing) => {
    const remainingArray = doingList.filter((array) => array.taskId !== doing.taskId);
    setDoing(remainingArray);
    setDone([...doneList, doing]);
  }
  // delete
  const deleteTodoClickHandler = (todo) => {
    const remainingArray = todoList.filter((array) => array.taskId !== todo.taskId);
    setTodo(remainingArray);
  }
  const deleteDoingClickHandler = (doing) => {
    const remainingArray = doingList.filter((array) => array.taskId !== doing.taskId);
    setDoing(remainingArray);
  }
  const deleteDoneClickHandler = (done) => {
    const remainingArray = doneList.filter((array) => array.taskId !== done.taskId);
    setDone(remainingArray);
  }

  //Back
  const MoveToTodoClickHandler = (doing) => {
    const remainingArray = doingList.filter((array) => array.taskId !== doing.taskId);
    setDoing(remainingArray);
    setTodo([...todoList, doing]);
  }
  const MoveToDongClickHandler = (done) => {
    const remainingArray = doingList.filter((array) => array.taskId !== done.taskId);
    setDone(remainingArray);
    setDoing([...doingList, done]);
  }

  return (
    <>
      <div>
        <input onChange={(e) => { setInput(e.target.value) }} value={input} type="text" class="p-2 m-2 bg-gray-100 w-1/4 h-12 border-b-2 border-gray-400" placeholder="Add task here.." />
        <button disabled={input === ''} class="p-2 bg-blue-600 text-white" onClick={() => addHandler(input)}><span class="material-symbols-outlined">
          Add</span></button>
      </div>
      <div class="flex justify-between m-10 ">
        {/* todo */}
        <div class="border-solid border-gray-500 border-r-2 w-1/4 h-auto pr-12">
          <h2 class="m-5 font-semibold text-xl">Todo</h2>
          {todoList.map((data) => {
            return (
              <div key={data.taskId} class="px-2 border-gray-300 border-solid border-b-2 m-2 flex justify-between">
                <p >{data.taskName}</p>
                <div>
                  <button class="p-2 m-1 bg-blue-600 text-white" onClick={() => deleteTodoClickHandler(data)}><span class="material-symbols-outlined">
                    Delete
                  </span></button>
                  <button class="p-2 bg-blue-600 text-white" onClick={() => MoveToDoingClickHandler(data)}><span class="material-symbols-outlined">
                    arrow_forward
                  </span></button>
                </div>
              </div>
            )
          }
          )
          }
        </div>
        {/* doing */}
        <div class="border-solid border-gray-500 border-r-2 w-1/4 h-auto pr-12">
          <h2 class="m-5 font-semibold text-xl">Doing</h2>
          {doingList.map((data) => {
            return (
              <div key={data.taskId} class="px-2 border-gray-300 border-solid border-b-2 m-2 flex justify-between">
                <p >{data.taskName}</p>
                <div>
                  <button class="p-2 m-1 bg-blue-600 text-white" onClick={() => MoveToTodoClickHandler(data)}><span class="material-symbols-outlined">
                    arrow_back
                  </span></button>
                  <button class="p-2 m-1 bg-blue-600 text-white" onClick={() => deleteDoingClickHandler(data)}><span class="material-symbols-outlined">
                    Delete
                  </span></button>
                  <button class="p-2 bg-blue-600 text-white" onClick={() => MoveToDoneClickHandler(data)}><span class="material-symbols-outlined">
                    arrow_forward
                  </span></button>
                </div>
              </div>
            )
          }
          )
          }
        </div>
        <div class=" w-1/4 h-auto">
          <h2 class="m-5 font-semibold text-xl">Done</h2>
          {doneList.map((data) => {
            return (
              <div key={data.taskId} class="px-2 border-gray-300 border-solid border-b-2 m-2 flex justify-between">
                <p >{data.taskName}</p>
                <div>
                  <button class="p-2 m-1 bg-blue-600 text-white" onClick={() => MoveToDongClickHandler(data)}><span class="material-symbols-outlined">
                    arrow_back
                  </span></button>
                  <button class="p-2 m-1 bg-blue-600 text-white" onClick={() => deleteDoneClickHandler(data)}><span class="material-symbols-outlined">
                    Delete
                  </span></button>
                </div>

              </div>
            )
          }
          )
          }
        </div>
      </div>
    </>
  );
}

export default App;
