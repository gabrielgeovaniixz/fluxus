import styles from './ListaTransacoes.module.css';
import { Trash2 } from 'lucide-react';

const ListaTransacoes = ({ transacoes, aoExcluir }) => {
  return (
    <div className={styles.container}>
      <h3>Histórico</h3>
      
      {transacoes.length === 0 && <p>Nada por aqui ainda...</p>}

      <div className={styles.tabela}>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transacoes.map(t => (
              <tr key={t.id}>
                <td>{t.descricao}</td>
                <td className={t.tipo === 'entrada' ? styles.verde : styles.vermelho}>
                  {t.tipo === 'entrada' ? '+' : '-'} R$ {t.valor.toFixed(2)}
                </td>
                <td>{t.data}</td>
                <td>
                  <button onClick={() => aoExcluir(t.id)} className={styles.btnExcluir}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaTransacoes;
