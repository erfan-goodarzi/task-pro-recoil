import { useState } from "react";
import { useRecoilValue, useRecoilCallback } from "recoil";
import styled from "styled-components";
import { tasksState } from "./MainTask";
import { taskState } from "./Task";

const InsertInput = styled.input`
  border-radius: 50px;
  background: #2c394b;
  box-shadow: 5px 5px 19px #19202b, -5px -5px 19px #3f526b;
  width: 103%;
  height: 97%;
  appearance: none;
  border: 0;
  margin-top: 1rem;
  color: #00f3ff;
  font-size: 15px;
  outline: none;
  -webkit-appearance: textfield;
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  padding: 2px 18px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #19202b;
    transition: all 0.2s ease-in-out;
  }
  &::placeholder {
    color: #fff;
  }
`;

const Container = styled.div`
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = () => {
  const [label, setLabel] = useState('')
  const tasks = useRecoilValue(tasksState)

  const insertTask = useRecoilCallback(({set}) => {
      return (label) => {
          const newTaskId = tasks.length
          set(tasksState, [...tasks, newTaskId])
          set(taskState(newTaskId), {
              label: label,
              complete: false,
          })
      }
  })

  return (
    <Container>
      <InsertInput
        placeholder="Insert a new task..."
        type="search"
        value={label}
        onChange={({ currentTarget }) => {
          setLabel(currentTarget.value);
        }}
        onKeyUp={({ keyCode }) => {
          if (keyCode === 13) {
            insertTask(label);
            setLabel("");
          }
        }}
      />
    </Container>
  );
};
