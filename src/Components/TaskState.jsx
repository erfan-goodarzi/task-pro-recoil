import React from "react";
import { Card } from "./Card";
import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
 
import { tasksState } from "./MainTask";
import { taskState } from "./Task";

const StatContainer = styled.div`
  flex: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 11px;

  text-transform: uppercase;
`;
const Stat = ({ label, value }) => {
  return (
    <StatContainer>
      <StatValue>{value}</StatValue>
      <StatLabel>{label}</StatLabel>
    </StatContainer>
  );
};

const Divider = styled.div`
  background: #ccc;
  width: 1px;
  height: 42px;
  margin: 0px 24px;
  opacity: 0.3;
`;

const Container = styled(Card)`
  padding-top: 15px;
  display: flex;
  padding-bottom: 15px;
  margin-bottom: 20px;
  overflow-y: unset;
`;

const taskCompleteState = selector({
  key: "taskComplete",
  get: ({ get }) => {
    const TaskId = get(tasksState).map(id =>{
      return get(taskState(id))
    })
    return TaskId.filter(task => task.complete).length;
  },
});

const taskRemainingState = selector({
  key: "taskRemaining",
  get: ({ get }) => {
    const TaskId = get(tasksState).map(id =>{
      return get(taskState(id))
    })
    return TaskId.filter(task => !task.complete).length;
  },
});


export const Stats = () => {
  const TaskComplete = useRecoilValue(taskCompleteState);
  const TaskRemaining = useRecoilValue(taskRemainingState);

  return (
    <Container>
      <Stat label="Tasks Complete" value={TaskComplete} />
      <Divider />
      <Stat label="Tasks Remaining" value={TaskRemaining} />
    </Container>
  );
};
