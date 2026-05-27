import styles from './Resumo.module.css';
import { ArrowUpCircle, ArrowDownCircle, Wallet } from 'lucide-react';

const Resumo = ({ entradas, saidas, total }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.info}>
          <span>Entradas</span>
          <ArrowUpCircle color="#10b981" size={24} />
        </div>
        <strong>R$ {entradas.toFixed(2)}</strong>
      </div>

      <div className={styles.card}>
        <div className={styles.info}>
          <span>Saídas</span>
          <ArrowDownCircle color="#ef4444" size={24} />
        </div>
        <strong>R$ {saidas.toFixed(2)}</strong>
      </div>

      <div className={`${styles.card} ${styles.total}`}>
        <div className={styles.info}>
          <span>Saldo Total</span>
          <Wallet size={24} />
        </div>
        <strong>R$ {total.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Resumo;
