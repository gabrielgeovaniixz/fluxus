import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import styles from './Grafico.module.css';

const Grafico = ({ entradas, saidas }) => {
  const dados = [
    { name: 'Entradas', value: entradas },
    { name: 'Saídas', value: saidas },
  ];

  const CORES = ['#10b981', '#ef4444'];

  return (
    <div className={styles.container}>
      <h3>Resumo Visual</h3>
      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={dados}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {dados.map((entry, index) => (
                <Cell key={index} fill={CORES[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Grafico;
