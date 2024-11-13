import { getChunkedTasks } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shadComponents/carousel";
import { useStore } from "@/store/useStore";
import TasksTable from "@/ui/sections/Table";

export default function Slider() {
  const filteredTasks = useStore((state) => state.filteredTasks)
  
  if(filteredTasks.length) {
    const chunkedTasks = getChunkedTasks(filteredTasks);

  return (
    <Carousel className="absolute top-[50px] w-[1180px]">
      <CarouselContent>
        {chunkedTasks.map((chunk) => (
          <CarouselItem key={`carousel-item-${chunk[0].id}`} className="pl-[18px] pr-[5px] py-[10px]">
              <TasksTable tasks={chunk}/>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
  }
  
  return <h2 className="absolute top-[150px] text-[30px] w-[300px] left-[480px]">No tasks yet. Or should ease filters...</h2>
}
