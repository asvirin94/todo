import AddTask from "../AddTask";
import Filters from "../Filters";
import { ContentWrapper } from "./styled";

export default function Content() {
  return (
    <ContentWrapper>
      <Filters />
      <AddTask />
    </ContentWrapper>
  );
}
