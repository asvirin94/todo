import {
  TabsContent,
  TabsList,
  TabsTrigger,
  Tabs,
} from "@/shadComponents/tabs";
import Slider from "../Slider";
import { useStore } from "@/store/useStore";

export default function ListsTabs() {
  const setFilterStatus = useStore((state) => state.setFilterStatus);
  const setFilteredTasks = useStore((state) => state.setFilteredTasks);
  const filterStatus = useStore((state) => state.filterStatus);

  const handleTabChange = (value: string) => {
    setFilterStatus(value);
    setFilteredTasks();
  };

  return (
    <Tabs
      value={filterStatus}
      onValueChange={handleTabChange}
      className="flex flex-col relative"
    >
      <TabsList className="w-[200px]">
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="done">Done</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
      </TabsList>
      <TabsContent value={filterStatus}>
        <Slider />
      </TabsContent>
    </Tabs>
  );
}
