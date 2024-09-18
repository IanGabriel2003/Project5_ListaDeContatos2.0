import './App.css';
import EstiloGlobal, { Container } from './styles';
import Header from './containers/Header';
import Main from './containers/Main'; 
import { useState } from 'react';

function App() {
  const [contatos, setContatos] = useState([]);

  const adicionarContato = (novoContato) => {
    setContatos([
      ...contatos,
      { ...novoContato, id: Date.now() } 
    ]);
  };

  const atualizarContato = (id, dadosAtualizados) => {
    setContatos(contatos.map(contato => 
      contato.id === id ? { ...contato, ...dadosAtualizados } : contato
    ));
  };

  const removerContato = (id) => {
    setContatos(contatos.filter(contato => contato.id !== id));
  };

  return (
    <>
      <EstiloGlobal />
      <Header onAdicionarContato={adicionarContato} />
      <Container>
        <Main 
          contatos={contatos} 
          onAtualizarContato={atualizarContato} 
          onRemoverContato={removerContato} 
        />
      </Container>
    </>
  );
}

export default App;
