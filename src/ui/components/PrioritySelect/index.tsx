import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadComponents/select";

import { useStore } from "@/store/useStore";

export default function PrioritySelect() {
  const setNewTaskPriority = useStore((state) => state.setNewTaskPriority);
  const newTaskPriority = useStore((state) => state.newTaskPriority);

  const handlePriorityChange = (priority: string) => {
    setNewTaskPriority(priority);
  };

  return (
    <Select onValueChange={handlePriorityChange} value={newTaskPriority}>
      <SelectTrigger className="w-[180px] ring-[1px] ring-green-300 focus:ring-green-300 focus:ring-0:focus">
        <SelectValue placeholder="Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="low">Low</SelectItem>
        <SelectItem value="normal">Normal</SelectItem>
        <SelectItem value="high">High</SelectItem>
      </SelectContent>
    </Select>
  );
}
