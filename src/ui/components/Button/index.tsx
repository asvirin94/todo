import { Button } from "@/shadComponents/button";
import { useStore } from "@/store/useStore";
import { toast } from "sonner";

export function CreateButton() {
  const newTaskTitle = useStore((state) => state.newTaskTitle);
  const newTaskPriority = useStore((state) => state.newTaskPriority);
  const addTask = useStore((state) => state.addTask);
  const resetForm = useStore((state) => state.resetAddTaskForm);
  const setFilteredTasks = useStore((state) => state.setFilteredTasks);

  const handleCreateTask = () => {
    if (newTaskTitle && newTaskPriority) {
      addTask({
        title: newTaskTitle,
        priority: newTaskPriority,
        status: 'active',
      });
      toast('Task has been created')
      resetForm();
      setFilteredTasks();
    }
  };

  return <Button onClick={handleCreateTask}>Create Task</Button>;
}
