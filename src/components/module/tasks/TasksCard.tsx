import { Button } from "@/components/ui/button"
import type { ITask } from "@/types"

interface IProps {
  task: ITask
}

const TaskCard = ({task} : IProps) => {

  // console.log(task);
  return (
    <div className="max-w-5xl mx-auto mt-5">
      <div className="flex w-full  items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <input
        type="checkbox"
        className="h-5 w-5 cursor-pointer accent-blue-600"
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        <p className="text-sm text-gray-500">
          {task.description}
        </p>
      </div>

      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
        {task.priority}
      </span>

      <Button className="bg-red-500 hover:bg-red-600">Delete</Button>
    </div>
    </div>
  )
}

export default TaskCard
