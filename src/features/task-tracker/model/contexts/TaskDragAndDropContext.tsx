import { ReactNode, createContext, useContext, useReducer } from 'react';
import { TrackerColumnProps } from '@/entities/tracker-column';
import { TaskProps } from '@/entities/task';

const TasksDragAndDropContext = createContext<TrackerColumnProps[] | null>(null);
const TasksDragAndDropDispatchContext = createContext<React.Dispatch<TasksDragAndDropReducerAction> | null>(null);

export function TasksDragAndDropProvider({ children }: {children: ReactNode}) {
  const [taskDragAndDropItem, dispatch] = useReducer(
    tasksReducer,
    {} as TasksDragAndDropReducerAction,
  );
  return (
    <TasksDragAndDropContext.Provider value={taskDragAndDropItem}>
      <TasksDragAndDropDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDragAndDropDispatchContext.Provider>
    </TasksDragAndDropContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksDragAndDropContext);
}

export function useTasksCulumnsDispatch() {
  return useContext(TasksDragAndDropDispatchContext);
}

interface TasksDragAndDropReducerAction{
  type: 'setDropped' | 'removeDropped';
  task: TaskProps;
}

function tasksReducer(tasks: TrackerColumnProps[], action: TasksDragAndDropReducerAction) {
  switch (action.type) {
    case 'setDropped': {
      return action.task as TaskProps;
    }
    case 'removeDropped': {
      console.log(tasks[tasks.length - 1]);
      return null;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
