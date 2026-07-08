import { selectFilter, selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Tasks = () => {

    const tasks =  useAppSelector(selectTasks)
    const tasks =  useAppSelector(selectFilter)
    
    console.log(tasks);


    return (
        <div>
            <h1>This is Task</h1>
        </div>
    );
};

export default Tasks;