import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/shadComponents/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shadComponents/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadComponents/popover";

import { useState } from "react";
import { PRIORITIES } from "@/consts/priorities";
import PrioritiesBadges from "../PrioritiesBadges";
import { useStore } from "@/store/useStore";

export function PriorityFilters() {
  const togglePriorityFilter = useStore((state) => state.toggleFilterPriority)
  const setFilteredTasks = useStore((state) => state.setFilteredTasks);
  const filterPriority = useStore((state) => state.filterPriority)
  const [open, setOpen] = useState(false);

  const handlePriorityToggle = (value: string) => {
    togglePriorityFilter(value);
    setFilteredTasks();
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between ring-1 ring-gray-300 focus:ring-0:focus"
        >
          <ChevronsUpDown className="opacity-50" />
          Priority
          {filterPriority.length > 0 ? <PrioritiesBadges values={filterPriority} /> : ""}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search priority..." className="h-9" />
          <CommandList>
            <CommandEmpty>No priority found.</CommandEmpty>
            <CommandGroup>
              {PRIORITIES.map((priority) => (
                <CommandItem
                  key={priority.value}
                  value={priority.value}
                  onSelect={(currentValue) => {
                    handlePriorityToggle(currentValue);
                    setOpen(false);
                  }}
                >
                  {priority.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      filterPriority.includes(priority.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
