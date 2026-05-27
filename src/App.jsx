import BarraLateral from './components/BarraLateral';
import Painel from './pages/Painel';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <BarraLateral />
      <Painel />
    </div>
  );
}

export default App;
