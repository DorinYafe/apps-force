import styled from 'styled-components';

const Button = styled.button`
    color: white;
    background: #f8049c;
    font-weight: bold;
    padding: 8px;
    border-radius: 4px;
    box-shadow: none;
    font-size: 1em;
    border: none;
    width: 100px;
    display: block;
    white-space: none;
    margin-top: 1.5rem;
    cursor: pointer;

    &:disabled {
        background: #eee;
        color: #666;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export {Button, ButtonsContainer};