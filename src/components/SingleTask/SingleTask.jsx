import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

export const SingleTask = ({ array, setTask, task }) => {
  const [taskDone, setTaskDone] = useState(false);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");

  const completeTask = () => {
    const completedTasks = task.map((e) => {
      if (e.id === array.id) {
        return { ...e, task: array.task, isDone: true };
      } else {
        return e;
      }
    });
    setTask(completedTasks);
    setTaskDone(true);
  };

  const removeTask = () => {
    setTask(task.filter((e) => e.id !== array.id));
  };

  const updateTask = () => {
    const updatedTasks = task.map((e) => {
      if (e.id === array.id && input.length > 0) {
        return { ...e, task: input || e.task, isDone: false }; // Atualiza a tarefa
      } else return e;
    });

    setTask(updatedTasks); // Atualiza o estado com o novo array
    setEdit(false); // Fecha o modo de edição
    setInput(""); // Limpa o campo de entrada, se desejado
  };

  return (
    <div
      className="w-full flex flex-row items-center justify-between px-[25rem]"
      key={array.id}
    >
      <div className="flex flex-row items-center justify-center gap-x-[10rem]">
        <FaCheck
          onClick={() => completeTask()}
          className="fill-gray-600 w-[20rem] h-[20rem] hover:cursor-pointer"
        />

        {edit === true ? (
          <div className="flex flex-row items-center justify-center gap-x-[10rem]">
            <input
              onChange={(e) => setInput(e.target.value)}
              placeholder={array.task}
              className="text-base font-bold text-gray-600 font-montserrat bg-transparent border-gray-700 px-[10rem] w-[220rem] border-[1rem] rounded-full focus:outline-none uppercase"
              type="text"
            />
            <button
              onClick={() => updateTask()}
              className="text-sm font-bold font-montserrat text-white bg-green-500 rounded-[15rem] px-[10rem] h-[26rem]"
            >
              UPDATE
            </button>
          </div>
        ) : (
          <label
            style={taskDone === true ? { textDecoration: "line-through" } : {}}
            className="text-gray-600 text-base font-bold font-montserrat uppercase"
          >
            {array.task}
          </label>
        )}
      </div>

      <div className="flex flex-row items-center justify-between gap-x-[10rem]">
        <FaPencilAlt
          onClick={() => setEdit(true)}
          className="fill-gray-600 w-[20rem] h-[20rem] hover:cursor-pointer"
        />
        {array.isDone && (
          <MdDeleteForever
            onClick={() => removeTask()}
            className="fill-gray-600 w-[26rem] h-[26rem] hover:cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
