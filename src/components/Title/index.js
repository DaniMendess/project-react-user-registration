import React from "react";

import {H1} from "./styles"

function Title (props) {
    const title = props.children
    return <H1>{title}</H1>
}

export default Title