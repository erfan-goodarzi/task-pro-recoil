import React from "react";
import { atomFamily, useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import Checkimg from "../assets/Checksvg.svg";
export const TextStyle = css`
 
position: relative;
    font-size: 17px;
    font-family: inherit;
    padding: 16px 1px;
    color: #00f3ff;
 
`;
export const Container = styled.div`
border-radius: 10px;

    background: #2c394b;
    box-shadow: 5px 5px 19px #19202b, -5px -5px 19px #3f526b;
    width: 141%;
    height: 7vh;
    margin: 2rem -3rem;
    display: felx;

 
`;
const Check = styled.div`
border-radius: 3px;
    background: #485d79;
    box-shadow: 5px 5px 19px #19202b, -5px -5px 19px #3f526b;
 
 
    width: 20px;
    height: 20px;
    margin: 16px 20px;
 
transition: 0.2s all ease-in-out;
 
align-items: center;
 
justify-content: center;
 
display: flex;
 
cursor: pointer;
${(props) =>
  props.checked &&
  css`
    background-color: transparent;
    box-shadow: none;
  `}
 
 
`;
const CheckIcon = styled.img`
 
transition: 0.1s opacity ease-in-out;

   
 
`;
const Label = styled.div`
 
position: relative;
 
${TextStyle}
 
`;
const Strikethrough = styled.div`
  position: absolute;
    top: 50%;
    left: -3px;
    right: -3px;
    height: 2px;
    background-color: #fff;
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: center left;
    transition: 0.1s all ease-in-out;
    ${(props) =>
        props.checked &&
        css`
            transform: scaleX(1);
        `};
`;

export const taskState = atomFamily({
  key: "task",
  default: {
    label: "",
    complete: false,
  },
});
export const Task = ({ id }) => {
  const [{ complete, label }, setTask] = useRecoilState(taskState(id));

  return (
    <Container
      onClick={() => {
        setTask({
          label,
          complete: !complete,
        });
      }}
    >
      <Check checked={complete}>
        <CheckIcon src={Checkimg} style={{ opacity: complete ? 1 : 0 }} />
      </Check>
      <Label>
        {label}
        <Strikethrough checked={complete} />
      </Label>
    </Container>
  );
};
