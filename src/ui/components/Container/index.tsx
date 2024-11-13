import { Toaster } from "@/shadComponents/sonner";
import { ContainerElement } from "./styled";

type PropsType = {
  children: React.ReactNode;
};

export default function Container({ children }: PropsType) {
  return (
    <ContainerElement>
      {children}
      <Toaster
        toastOptions={{
          className: "bg-[black] text-white rounded-lg shadow-lg h-[75px]",
        }}
      />
    </ContainerElement>
  );
}
