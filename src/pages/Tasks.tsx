import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TasksCard";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Tasks = () => {

    const tasks =  useAppSelector(selectTasks)
    // const filter =  useAppSelector(selectFilter)
    
    console.log(tasks);
    // console.log(filter);


    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="mt-10 mb-10">Tasks</h1>
            <AddTaskModal/>
            <div>
                {
                    tasks.map((task)=> (
                        <TaskCard key={task.id} task={task} />
                    ))
                }
            </div>
        </div>
    );
};

export default Tasks;