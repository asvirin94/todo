import ListsTabs from "@/ui/components/ListsTabs";
import { FiltersWrapper } from "./styled";
import { PriorityFilters } from "@/ui/components/PriorityFilters";

export default function Filters() {
  return (
    <FiltersWrapper>
      <ListsTabs />
      <PriorityFilters />
    </FiltersWrapper>
  );
}
