import { useState, useEffect } from 'react';
import styles from './Painel.module.css';
import Cabecalho from '../components/Cabecalho';
import Resumo from '../components/Resumo';
import Formulario from '../components/Formulario';
import ListaTransacoes from '../components/ListaTransacoes';
import Grafico from '../components/Grafico';
import { dadosIniciais } from '../data/dadosIniciais';

const Painel = () => {
  const [transacoes, setTransacoes] = useState(() => {
    const salvo = localStorage.getItem('fluxus_dados');
    return salvo ? JSON.parse(salvo) : dadosIniciais;
  });

  useEffect(() => {
    localStorage.setItem('fluxus_dados', JSON.stringify(transacoes));
  }, [transacoes]);

  const addTransacao = (nova) => {
    setTransacoes([nova, ...transacoes]);
  };

  const deleteTransacao = (id) => {
    setTransacoes(transacoes.filter(t => t.id !== id));
  };

  const entradas = transacoes
    .filter(t => t.tipo === 'entrada')
    .reduce((soma, t) => soma + t.valor, 0);

  const saidas = transacoes
    .filter(t => t.tipo === 'saida')
    .reduce((soma, t) => soma + t.valor, 0);

  const total = entradas - saidas;

  return (
    <div className={styles.painel}>
      <Cabecalho />
      
      <main className={styles.conteudo}>
        <Resumo entradas={entradas} saidas={saidas} total={total} />

        <div className={styles.grade}>
          <div>
            <Formulario aoAdicionar={addTransacao} />
            <ListaTransacoes transacoes={transacoes} aoExcluir={deleteTransacao} />
          </div>
          
          <div>
            <Grafico entradas={entradas} saidas={saidas} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Painel;
