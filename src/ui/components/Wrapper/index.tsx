import React from "react"
import { WrapperElement } from "./styled";

type PropsType = {
    children: React.ReactNode;
}

export default function Wrapper({children}: PropsType) {
    return(
        <WrapperElement>
            {children}
        </WrapperElement>
    )
}