import { CreateTask } from "./components/CreateTask/CreateTask";
import { ManageTask } from "./components/ManageTask/ManageTask";
import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold font-montserrat mt-[25rem]">
        TO-DO LIST APP ✏️ 📋
      </h1>
      <CreateTask task={task} setTask={setTask} />
      <ManageTask task={task} array={task} setTask={setTask} />
    </div>
  );
}

export default App;
