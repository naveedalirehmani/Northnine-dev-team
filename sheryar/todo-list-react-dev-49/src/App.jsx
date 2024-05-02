import { useState, useEffect, useRef} from "react";
import Navbar from "./Compunents/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const inputRef = useRef(null);


  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
    settodo("");
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handlerCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodes = [...todos];
    newTodes[index].isCompleted = !newTodes[index].isCompleted;
    settodos(newTodes);
   
  };

  const handleDelete = (e, id) => {
    // let index = todos.findIndex((item) => {
    //   return item.id === id;
    // });
    let newTodes = todos.filter((item) => {
      return item.id !== id;
    });

    settodos(newTodes);
  };

  const handleEdit = (e, id) => {

    let t=todos.filter(i=>i.id===id)
    settodo(t[0].todo)
    let newTodes = todos.filter((item) => {
      return item.id !== id;
    });

    settodos(newTodes);
  };

  return (
    <>
      <Navbar />

      <div className="container my-10 rounded-xl bg-violet-300 p-5 min-h-[80vh] w-[70%] ml-52 shadow-2xl text-center items-center">
        <div className="Add-todo">
          <h2 className="text-lg font-mono ">Add a To-Do item, but it should be greater than three characters.</h2>
            <input
            ref={inputRef}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={todo}
            type="text"
            className="w-[40%] my-5 h-[30px] border-none rounded-md"
            placeholder=" Enter here "
          />
          <button
            onClick={handleAdd} disabled={todo.length<3}
            className=" disabled:bg-slate-600   mx-5 px-2 py-1 text-sm cursor-pointer bg-purple-700 hover:bg-green-700 font-bold rounded-md text-white "
          >
            Add
          </button>
        </div>
        {/* <h1 className="text-xl font-bold"> YOU todo</h1> */}
        <div className="todoes ">
          {todos.length===0  && <h1 className="font-mono mr-10" >You TO DO is Empty</h1>}
          {todos.map((item) => {
            return (
              <div
                key={item.id}
                className="todo flex justify-between w-[4%] my-5 ml-52"
              >
                <div className={` ${ item.isCompleted ? "line-through" : ""}`}>
                  <p className=' w-52 overflow-hidden overflow-ellipsis whitespace-nowrap'>{item.todo}</p>
                </div>

                <div className="buttons flex w-full  ">
                  <input
                  className="ml-40"
                    name={item.id}
                    onChange={handlerCheckbox}
                    type="checkbox"
                    value={item.iscompleted}
                  />
                  <button
                    onClick={ (e)=>{handleEdit(e, item.id)}}
                    className="mx-2 px-2 py-1 text-sm cursor-pointer bg-purple-700 hover:bg-yellow-500 font-bold rounded-md text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="mx-1 px-2 py-1 text-sm cursor-pointer bg-purple-700 hover:bg-red-700 font-bold rounded-md text-white"
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default App;
