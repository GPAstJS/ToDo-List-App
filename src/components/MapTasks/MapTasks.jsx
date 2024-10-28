import { SingleTask } from "../SingleTask/SingleTask";

export const MapTasks = ({ array, setTask, task }) => {
  return array?.map((e) => {
    return (
      <SingleTask key={e.id - 1} task={task} setTask={setTask} array={e} />
    );
  });
};
