import React from "react";
import styled from "styled-components";
import { Task } from "./Task";
import { atom, useRecoilValue } from "recoil";
const Main = styled.div`
  height: 0vh;
`;

export const tasksState = atom({
  key: "tasks",
  default: [],
});

export const MainTask = () => {
  const tasks = useRecoilValue(tasksState);

  return (
    <Main>
      {tasks.map((id) => (
        <Task id={id} key={id} />
      ))}
    </Main>
  );
};
