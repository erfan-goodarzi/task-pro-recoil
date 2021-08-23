import React from 'react'
import styled from 'styled-components'
import {Task} from './Task'

const Eg = styled.div`
height: 0vh;

`

export const MainTask = () => {
    return (
        <Eg>
            <Task id={0} />
            <Task id={1} />
            <Task id={2} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
            <Task id={3} />
        </Eg>
    )
}