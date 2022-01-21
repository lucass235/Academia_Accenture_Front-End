import styled from 'styled-components';
import { FiAperture, TiSocialInstagram } from 'react-icons/fi';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: black; ;
    `;

    export const Title = styled.h1`
    font-size: 32px;
    color: black;
    `;

    export const SubTitle = styled.h2`
    font-size: 24px;
    color: pink;
    `;

    // export const ButtonConfirmar = styled.button`
    // color: green;
    // padding: 8px 20px;
    // border-radius: 24px;
    // font-size: 24px;
    // `;

    // export const ButtonCancelar = styled.button`
    // color: red;
    // padding: 8px 20px;
    // border-radius: 24px;
    // font-size: 24px;
    // `;

export const Button = styled.button`
border: none;
background: ${props => (props.color ? props.color: 'black')};
color: white;
padding: 8px 20px;
border-radius: 24px;
font-size: 24px;

&:hover {
   cursor: pointer;
   background: yellowgreen;
}

&:active {
    background: blueviolet;
}
`;

export const ButtonAlt = styled(Button)`
font-family: 'Times New Roman', Times, serif;
`;

export const IconLens = styled(FiAperture)`
color: blue;
width: 80px;
height: 80px;
`;