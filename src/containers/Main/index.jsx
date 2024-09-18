import { useState } from "react";
import { Botoes, ContatoInformacao, Contatos, Editar, Remover } from "./styles";

const Main = ({ contatos, onAtualizarContato, onRemoverContato }) => {
    const [editandoContatoId, setEditandoContatoId] = useState(null);
    const [dadosTemporarios, setDadosTemporarios] = useState({});

    const handleEditar = (id, contato) => {
        setEditandoContatoId(id);
        setDadosTemporarios(contato); 
    };

    const handleSalvar = (id) => {
        onAtualizarContato(id, dadosTemporarios);
        setEditandoContatoId(null); 
    };

    const handleCancelar = () => {
        setEditandoContatoId(null); 
        setDadosTemporarios({});
    };

    const handleInputChange = (e, campo) => {
        setDadosTemporarios({
            ...dadosTemporarios,
            [campo]: e.target.value
        });
    };

    return (
        <main>
            {contatos.map((contato) => (
                <Contatos key={contato.id}>
                    <li>
                        <img src="https://img.icons8.com/?size=100&id=43383&format=png&color=000000" alt="Contato" />
                        <ContatoInformacao>
                            <img src="https://img.icons8.com/?size=100&id=11779&format=png&color=000000" alt="Nome Contato" />
                            <input
                                type="text"
                                value={editandoContatoId === contato.id ? dadosTemporarios.nome : contato.nome}
                                disabled={editandoContatoId !== contato.id}
                                onChange={(e) => handleInputChange(e, "nome")}
                            />
                        </ContatoInformacao>
                        <ContatoInformacao>
                            <img src="https://img.icons8.com/?size=100&id=499&format=png&color=000000" alt="Email Contato" />
                            <input
                                type="text"
                                value={editandoContatoId === contato.id ? dadosTemporarios.email : contato.email}
                                disabled={editandoContatoId !== contato.id}
                                onChange={(e) => handleInputChange(e, "email")}
                            />
                        </ContatoInformacao>
                        <ContatoInformacao>
                            <img src="https://img.icons8.com/?size=100&id=9730&format=png&color=000000" alt="Telefone Contato" />
                            <input
                                type="text"
                                value={editandoContatoId === contato.id ? dadosTemporarios.telefone : contato.telefone}
                                disabled={editandoContatoId !== contato.id}
                                onChange={(e) => handleInputChange(e, "telefone")}
                            />
                        </ContatoInformacao>

                        {editandoContatoId === contato.id ? (
                            <>
                                <Editar onClick={() => handleSalvar(contato.id)}>Salvar</Editar>
                                <Remover onClick={handleCancelar}>Cancelar</Remover>
                            </>
                        ) : (
                            <>
                                <Editar onClick={() => handleEditar(contato.id, contato)}>Editar</Editar>
                                <Remover onClick={() => onRemoverContato(contato.id)}>Remover</Remover>
                            </>
                        )}
                    </li>
                </Contatos>
            ))}
        </main>
    );
};

export default Main;
