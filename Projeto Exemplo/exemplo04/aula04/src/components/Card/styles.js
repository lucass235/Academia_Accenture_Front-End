import { FiAperture } from "react-icons/fi";
import { BsFillCloudSunFill } from "react-icons/bs";
import styled, { css } from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: red;
  background: ${(props) => props.theme.primary};
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.highlight};
`;

export const Subtitle = styled.h1`
  font-size: 32px;
  color: ${(props) => props.theme.secondary};
`;

export const Button = styled.button`
  transition: all 0.2s ease;
  margin: 8px 0px;
  border: none;
  background: ${(props) => (props.color ? props.color : "darkblue")};
  color: white;
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 24px;

  &:hover {
    background: yellowgreen;
    cursor: pointer;
    transform: translateY(-4px);
  }

  &:active {
    background: olivedrab;
    transform: translateY(-2px);
  }
`;

export const ButtonAlt = styled(Button)`
  font-family: "Times New Roman";
  color: black;
  width: ${(props) => props.theme.width};
`;

export const NoStylePreset = css`
  outline: none;
  border: none;
  background: none;
`;

export const EmptyButton = styled.button`
  ${NoStylePreset}
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
  }

  &:active {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

export const IconLens = styled(FiAperture)`
  color: yellow;
  width: 80px;
  height: 80px;
`;

export const LightDarkIcon = styled(BsFillCloudSunFill)`
  color: ${(props) => props.theme.secondary};
  width: 80px;
  height: 80px;
`;
