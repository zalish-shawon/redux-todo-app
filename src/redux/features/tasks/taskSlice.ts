import type { RootState } from "@/redux/store";
import type { ITask } from "@/types"
import { createSlice } from "@reduxjs/toolkit"


interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low"
}

const initialState : InitialState = {
  tasks: [
    {
      id: "add",
      title: "Initialize Frontend",
      description: "create homepage",
      dueDate: "2026-12",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "add",
      title: "Initialize backend",
      description: "create about",
      dueDate: "2026-12",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "all",
}

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
})


export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export default taskSlice.reducer
