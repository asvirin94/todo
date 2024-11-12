import {
  TabsContent,
  TabsList,
  TabsTrigger,
  Tabs,
} from "@/shadComponents/tabs";

export default function ListsTabs() {
  return (
    <Tabs defaultValue="active" className="relative ring-1 ring-gray-300 rounded-md">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="done">Done</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="absolute">All</TabsContent>
      <TabsContent value="active" className="absolute">Active</TabsContent>
      <TabsContent value="done" className="absolute">Done</TabsContent>
    </Tabs>
  );
}
