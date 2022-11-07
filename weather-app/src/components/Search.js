import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: #f2f2f2;
    padding: 16px;
`

const Input = styled.input`
    padding: 8px;
    border: none;
    border-radius: 4pt 0 0 4pt;
    width: 100%;
`

const Button = styled.button`
    border: none;
    color: white;
    padding: 8px 16px;
    background-color: black;
    border-radius: 0 4pt 4pt 0;
    &:hover {
        background-color: rgba(72,72,74,.85);
    }
`

export default function Search({onSearch}) {
    const [input, setInput] = useState('');
    return (
        <Container>
            <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Search city" />
            <Button onClick={() => onSearch(input.trim())}>Search</Button>
        </Container>
    )
}
