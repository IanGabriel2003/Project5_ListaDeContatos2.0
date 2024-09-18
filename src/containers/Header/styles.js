import styled from "styled-components";

export const Cabecalho = styled.header`
    background-color: #EFE6DD;
    margin-bottom: 60px;

    img {
        max-width: 48px;
    }

    button {
        background-color: green;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
    }

    button:hover {
        background-color: lightgreen;
    }
`

export const Icones = styled.li`
    gap: 24px;

    p {
        font-size: 20px;
        font-weight: bold;
    }

    input {
        border-radius: 4px;
        padding: 4px;
    }
`

export const Informacoes = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    li {
        display: flex;
        align-items: center;
    }
`