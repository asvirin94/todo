import { Label } from "@/shadComponents/label";
import { Switch } from "@/shadComponents/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadComponents/table";
import { useStore } from "@/store/useStore";
import { TaskType } from "@/types";

export default function TasksTable({ tasks }: { tasks: TaskType[] }) {
  const toggleTaskStatus = useStore((state) => state.toggleTaskStatus);
  const setFilteredTasks = useStore((state) => state.setFilteredTasks);

  const handleSwitchClick = (id: number) => {
    toggleTaskStatus(id);
    setFilteredTasks();
  }

  return (
    <Table>
      <TableHeader className="ring ring-[2px] ring-[black]">
        <TableRow className="w-[1180px]">
          <TableHead className="w-[150px]">Number</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="w-[150px]">Status</TableHead>
          <TableHead className="w-[150px]">Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id} className="border-b border-zinc-600">
            <TableCell className="text-center font-[700] text-[12px]">{`TASK-${task.id}`}</TableCell>
            <TableCell className="text-center font-[700] text-[18px]">
              {task.title}
            </TableCell>
            <TableCell className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <Switch
                  id={`status-${task.id}`}
                  checked={task.status === "done"}
                  onCheckedChange={() => handleSwitchClick(task.id)}
                />
                <Label htmlFor={`status-${task.id}`}>
                  {task.status === "done" ? "Done" : "Active"}
                </Label>
              </div>
            </TableCell>
            <TableCell className="text-center">{task.priority}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
