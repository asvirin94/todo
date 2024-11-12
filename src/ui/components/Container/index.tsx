import { ContainerElement } from "./styled";

type PropsType = {
    children: React.ReactNode
}

export default function Container({children}: PropsType) {
    return(
        <ContainerElement>
            {children}
        </ContainerElement>
    )
}