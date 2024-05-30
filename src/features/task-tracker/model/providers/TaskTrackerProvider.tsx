import { ReactNode, useReducer } from 'react';
import { TasksColumnContext, TasksColumnDispatchContext, initialTasksData, tasksReducer } from '../contexts/TaskColumnContext';

export function TasksTrackerProvider({ children }: {children: ReactNode}) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasksData
  );
  console.log(tasks);
  return (
    <TasksColumnContext.Provider value={tasks}>
      <TasksColumnDispatchContext.Provider value={dispatch}>
        {children}
      </TasksColumnDispatchContext.Provider>
    </TasksColumnContext.Provider>
  );
}
