import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 67px;
    background: ${props => props.MyProp ? "transparent" : "black"};
    border-radius: 14px;
    border: ${props => props.MyProp ? "1px solid #FFFFFF" : "none" };
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    margin-top: ${props => props.MyProp ? "50px" : "0"} ;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.7;
    }

    ${props => props.MyProp && `
        img {
         transform: scaleX(-1);
        }
    `}
`;