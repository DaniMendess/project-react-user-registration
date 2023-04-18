import styled from "styled-components";
import Background from "../../assets/bg2.svg"

import {Link} from "react-router-dom"


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
    margin-bottom: 45px;
`;

export const ContainerIten = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 61px 61px 0px 0px;
    padding: 50px 25px;
    min-height: calc(100vh );
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    backdrop-filter: blur(22.5px);
`;

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    color: #FFFFFF;
`;


export const Button = styled(Link)`
    width: 342px;
    height: 67px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    cursor: pointer;
    margin-top: 50px ;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.7;
    }

    img {
        transform: scaleX(-1);
    }
`;

export const Users = styled.li `
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    outline: none;
    border: none;
    height: 58px;
    margin-top: 20px;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 28px;
        color: #FFFFFF;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

`
