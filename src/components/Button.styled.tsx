import styled, { css } from "styled-components";

type BtnPropsType = {
    color?: string;
    primary?: boolean;
    outlined?: boolean;
}

export const Button = styled.button<BtnPropsType>`
    height: 30px;
    width: 86px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    
    ${props => props.outlined && css<BtnPropsType>`
        border: 2px solid ${props => props.color || '#4E71FE'};
        color: ${props => props.color || '#4E71FE'};
        background-color: transparent;
    `}
    
    ${props => props.primary && css<BtnPropsType>`
        color: #ffffff;
        background-color: ${props => props.color || '#4E71FE'};
    `}
`