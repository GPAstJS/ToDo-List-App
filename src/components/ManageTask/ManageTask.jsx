import { MapTasks } from "../MapTasks/MapTasks"

export const ManageTask = ({array, setTask, task}) => {

    return (
        <div className="w-[450rem] py-24  bg-gray-300 rounded-[25rem] flex flex-col items-center justify-center">
        {array.length === 0 ? (
          <h2 className="font-bold font-montserrat text-base text-gray-600">
            There's no pending to-dos!
          </h2>
        ) : (
  
          <MapTasks task={task} setTask={setTask} array={array} />
        )}
      </div>
    )

} 