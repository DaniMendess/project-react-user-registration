import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../../assets/bg1.svg"



export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled.img`
    margin-top: 30px;
    margin-bottom: 45px;
`;

export const ContainerIten = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 25px;
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

export const P = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;  
    letter-spacing: -0.408px;   
    color: #EEEEEE;
    padding-left:21px;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    outline: none;
    border: none;
    padding: 15px 25px;
    color: #ffffff;
    margin-bottom: 25px;
    height: 58px;
`;

export const Button = styled(Link)`
    width: 342px;
    height: 67px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
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

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.7;
    }
`;

