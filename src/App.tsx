import Container from "./ui/components/Container";
import { Title } from "./ui/components/Title/styled";
import Wrapper from "./ui/components/Wrapper";
import Content from "./ui/sections/Content";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./shadComponents/dialog";
import { Button } from "./shadComponents/button";
import { useState } from "react";

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true)

  return (
    <Wrapper>
      <Container>
        <Title>
          Hello, <span>Mindbox</span>, start planning today
        </Title>
        <Content />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger className="absolute top-[580px]">
            <Button>About this work</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Привет, Minbox</DialogTitle>
              <DialogDescription>
                Это третья попытка сделать тудушку, предыдущие две не устраивали
                меня либо по дизайну, либо по стеку, который я выбирал. Было потрачено
                немало времени, поэтому, надеюсь, работа оставит приятное
                впечатление.
                <br />
                <br />
                Мой обычный стек - React, TS, RTK, MUI. В этой работе решил
                впервые испробовать Zustand и Shadcn. В ТЗ не было ясно, можно
                ли использовать стейт-менеджеры, но если вдруг нельзя было, то я
                умею пользовать React-контекстом :)
                <br />
                <br />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Container>
    </Wrapper>
  );
}
