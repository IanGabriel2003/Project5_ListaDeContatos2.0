import { useState } from "react";
import { Cabecalho, Icones, Informacoes } from "./styles";

const Header = ({ onAdicionarContato }) => {
    const [novoContato, setNovoContato] = useState({
        nome: "",
        email: "",
        telefone: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovoContato({
            ...novoContato,
            [name]: value
        });
    };

    const handleAdicionar = () => {
        if (novoContato.nome && novoContato.email && novoContato.telefone) {
            onAdicionarContato(novoContato);
            setNovoContato({ nome: "", email: "", telefone: "" });
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    return (
        <Cabecalho>
            <Informacoes>
                <Icones>
                    <img src="https://img.icons8.com/?size=100&id=JGyagdrmoSbN&format=png&color=000000" alt="Lista" />
                    <p>Contatos</p>
                </Icones>
                <Icones>
                    <img src="https://img.icons8.com/?size=100&id=11730&format=png&color=000000" alt="Name" />
                    <input
                        placeholder="Nome"
                        type="text"
                        name="nome"
                        value={novoContato.nome}
                        onChange={handleInputChange}
                    />
                    <img src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000" alt="Telefone" />
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={novoContato.email}
                        onChange={handleInputChange}
                    />
                    <img src="https://img.icons8.com/?size=100&id=9659&format=png&color=000000" alt="email" />
                    <input
                        placeholder="Telefone"
                        type="tel"
                        name="telefone"
                        value={novoContato.telefone}
                        onChange={handleInputChange}
                    />
                </Icones>
                <li>
                    <button type="button" onClick={handleAdicionar}>+ Adicionar</button>
                </li>
            </Informacoes>
        </Cabecalho>
    );
};

export default Header;
