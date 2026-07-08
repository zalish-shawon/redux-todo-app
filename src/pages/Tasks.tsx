import TaskCard from "@/components/module/tasks/TasksCard";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Tasks = () => {

    const tasks =  useAppSelector(selectTasks)
    // const filter =  useAppSelector(selectFilter)
    
    console.log(tasks);
    // console.log(filter);


    return (
        <div>
            <h1>This is Task</h1>
            <div>
                {
                    tasks.map((task)=> (
                        <TaskCard key={task.id} />
                    ))
                }
            </div>
        </div>
    );
};

export default Tasks;