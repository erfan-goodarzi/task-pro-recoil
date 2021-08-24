 
import styled from "styled-components";
import { Task } from "./Task";
import { atom, useRecoilValue } from "recoil";
const Main = styled.div`
  height: 0vh;
`;

export const taskState = atom({
  key: "tasks",
  default: [],
});

export const MainTask = () => {
  const tasks = useRecoilValue(taskState);

  return (
    <Main>
      {tasks.map((id) => (
        <Task id={id} key={id} />
      ))}
    </Main>
  );
};
