import styles from './BarraLateral.module.css';
import { LayoutDashboard } from 'lucide-react';

const BarraLateral = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.logo}>
        <h1>Fluxus</h1>
      </div>
      
      <nav className={styles.menu}>
        <ul>
          <li className={styles.itemAtivo}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default BarraLateral;
