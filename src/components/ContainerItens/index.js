import React from "react";

import { ContainerIten as Container } from "./style";


function ContainerIten ({children, MyProp}) {
    return <Container MyProp={MyProp}>{children}</Container>
}


export default ContainerIten
