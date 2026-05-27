import styles from './Cabecalho.module.css';
import { UserCircle } from 'lucide-react';

const Cabecalho = () => {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.subtitulo}>Bem-vindo,</p>
        <h2 className={styles.titulo}>Gabriel</h2>
      </div>
      
      <div className={styles.usuario}>
        <span>Gabriel</span>
        <UserCircle size={32} color="#64748b" />
      </div>
    </header>
  );
};

export default Cabecalho;
