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

export function PriorityFilters() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<string[]>([]);

  const priorityClickHandler = (value: string) => {
    if (values.includes(value)) {
      const newValues = values.filter((v) => v !== value);
      setValues(newValues);
    } else {
      setValues((prev) => [...prev, value]);
    }
  };

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
          {values.length > 0 ? <PrioritiesBadges values={values} /> : ""}
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
                    priorityClickHandler(currentValue);
                    setOpen(false);
                  }}
                >
                  {priority.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      values.includes(priority.value)
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
