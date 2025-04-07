import { useEffect, useState } from 'react';

function App() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar
  }, []);

  const formatoHora = hora.toLocaleTimeString();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '3rem',
      fontFamily: 'monospace'
    }}>
      🕒 {formatoHora}
    </div>
  );
}

export default App;
