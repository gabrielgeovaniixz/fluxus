import { useState } from 'react';
import styles from './Formulario.module.css';
import { Plus } from 'lucide-react';

const Formulario = ({ aoAdicionar }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('entrada');
  const [data, setData] = useState('');

  const enviar = (e) => {
    e.preventDefault();
    
    if (!descricao || !valor || !categoria || !data) {
      alert('Preencha tudo!');
      return;
    }

    aoAdicionar({
      id: Math.random(),
      descricao,
      valor: Number(valor),
      categoria,
      tipo,
      data
    });

    setDescricao('');
    setValor('');
    setCategoria('');
    setData('');
  };

  return (
    <div className={styles.box}>
      <h3>Nova Transação</h3>
      <form onSubmit={enviar} className={styles.form}>
        <div className={styles.campo}>
          <label>Descrição</label>
          <input 
            type="text" 
            value={descricao} 
            onChange={e => setDescricao(e.target.value)} 
          />
        </div>

        <div className={styles.campo}>
          <label>Valor</label>
          <input 
            type="number" 
            value={valor} 
            onChange={e => setValor(e.target.value)} 
          />
        </div>

        <div className={styles.campo}>
          <label>Categoria</label>
          <input 
            type="text" 
            value={categoria} 
            onChange={e => setCategoria(e.target.value)} 
          />
        </div>

        <div className={styles.campo}>
          <label>Data</label>
          <input 
            type="date" 
            value={data} 
            onChange={e => setData(e.target.value)} 
          />
        </div>

        <div className={styles.botoesTipo}>
          <button 
            type="button" 
            className={tipo === 'entrada' ? styles.ativoEntrada : ''}
            onClick={() => setTipo('entrada')}
          >
            Entrada
          </button>
          <button 
            type="button" 
            className={tipo === 'saida' ? styles.ativoSaida : ''}
            onClick={() => setTipo('saida')}
          >
            Saída
          </button>
        </div>

        <button type="submit" className={styles.btnSalvar}>
          <Plus size={20} />
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
