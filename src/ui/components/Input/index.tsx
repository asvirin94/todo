import { Input } from "@/shadComponents/input";

import { useStore } from "@/store/useStore";

export default function TaskName() {
  const newTaskTitle = useStore((state) => state.newTaskTitle);
  const setNewTaskTitle = useStore((state) => state.setNewTaskTitle);
  
  const handleTitleChange = (value: string) => {
    setNewTaskTitle(value);
  };

  return (
    <Input
      placeholder="Task title"
      className="ring-[1px] ring-green-300"
      onChange={(e) => handleTitleChange(e.target.value)}
      value={newTaskTitle}
    />
  );
}
