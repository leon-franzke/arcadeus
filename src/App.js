import React from 'react';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0D0D0D',
      fontFamily: 'Georgia, serif',
    }}>
      <h1 style={{
        fontSize: '28px',
        fontWeight: '600',
        color: '#ffffff',
        letterSpacing: '0.04em',
        marginBottom: '12px',
      }}>Arcadeus</h1>
      <p style={{
        fontSize: '14px',
        color: 'rgba(255,255,255,0.4)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>Coming soon</p>
    </div>
  );
}

export default App;