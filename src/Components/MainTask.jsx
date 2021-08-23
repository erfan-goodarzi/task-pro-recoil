import React from 'react'
import styled from 'styled-components'
import {Task} from './Task'

const Main = styled.div`
height: 0vh;

`

export const MainTask = () => {
    return (
        <Main>
            <Task id={0} />
            <Task id={1} />
            <Task id={2} />
            <Task id={3} />
    
        </Main>
    )
}