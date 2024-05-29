import { TaskTracker } from '@/features/task-tracker';
import { PageTitle } from '@/widgets/page-title';

export const MainPage = () => {
  return (
    <>
      <PageTitle />
      <TaskTracker />
    </>
  );
};
