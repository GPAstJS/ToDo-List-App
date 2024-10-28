import { useState } from "react";

export const CreateTask = ({ task, setTask }) => {
  const [input, setInput] = useState('');
  
  const addTask = () => {
    if(input.length > 0) {
        setTask([...task, { task: input, id: task.length + 1, isDone: false }])
      } else {
        alert("Input field can't be empty")
      }
      setInput('')
    };


  return (
    <div className="w-[450rem] flex flex-row items-center justify-center mt-[100rem] mb-[40rem]">
      <div className="bg-gray-300 w-full rounded-full h-[60rem] flex flex-row items-center justify-between">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="bg-transparent text-lg w-[350rem] text-gray-500 font-bold font-montserrat rounded-full px-[12rem] focus:outline-none truncate uppercase "
          placeholder="Add your task"
          type="text"
        />

        <button
          onClick={() => addTask()}
          className="h-full w-[100rem] text-white font-bold font-montserrat bg-[#FF5845] rounded-full text-lg"
        >
          ADD
        </button>
      </div>
    </div>
  );
};
