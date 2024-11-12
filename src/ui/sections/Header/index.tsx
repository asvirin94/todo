import AddTask from "../AddTask";
import Filters from "../Filters";
import { HeaderWrapper } from "./styled";

export default function Header() {
  return (
    <HeaderWrapper>
      <Filters />
      <AddTask />
    </HeaderWrapper>
  );
}
