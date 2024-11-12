import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadComponents/select";

export default function PrioritySelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] ring-[1px] ring-red-300 focus:ring-red-300 focus:ring-0:focus">
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
