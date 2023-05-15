import styled from "styled-components";


export const ContainerIten = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 25px;

    ${props => props.MyProp && `
        min-height: calc(450px );
    `}
`;
