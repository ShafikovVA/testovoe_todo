import { TaskTracker } from '@/features/task-tracker';
import { TasksTrackerProvider } from '@/features/task-tracker/model/providers/TaskTrackerProvider';
import { PageTitle } from '@/widgets/page-title';

export const MainPage = () => {
  return (
    <>
      <PageTitle />
      <TasksTrackerProvider>
        <TaskTracker />
      </TasksTrackerProvider>
    </>
  );
};
