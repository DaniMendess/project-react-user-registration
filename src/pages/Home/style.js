
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

