import styled from "styled-components";

export const Main = styled.main`
`

export const ContatoInformacao = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
    gap: 12px;

    img {
        margin: 0 auto;
        max-width: 48px;
    }
`

export const Contatos = styled.ul`
    max-width: 80%;
    margin: 20px auto;

    background-color: #EFE6DD;

    li { 
        display: flex;
        justify-content: space-between;
        padding: 40px;
        border: 2px solid #000;
        border-radius: 10px;
        align-items: center;
    }

    input {
        text-align: center;
        font-weight: bold;
        border: none;
        padding: 0px 8px;
    }
`

export const Editar = styled.button`
    background-color: orange;
    border-radius: 16px;
    padding: 8px 18px;
    cursor: pointer;

    &:hover {
        background-color: yellow;
    }
`

export const Remover = styled.button`
    background-color: red;
    border-radius: 16px;
    padding: 8px 18px;
    cursor: pointer;

    &:hover {
        background-color: orange;
    }
`