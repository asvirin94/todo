import PrioritySelect from "@/ui/components/PrioritySelect";
import { AddTaskWrapper } from "./styled";
import TaskName from "@/ui/components/Input";
import { CreateButton } from "@/ui/components/Button";

export default function AddTask() {
    return(
        <AddTaskWrapper>
            <PrioritySelect />
            <TaskName />
            <CreateButton />
        </AddTaskWrapper>
    )
}