import React, { useState, useEffect } from 'react';

const PASSWORD = 'RADDVIP';
const STORAGE_KEY = 'globetrotter_vip_access';

interface LicenseGateProps {
  onUnlock: () => void;
}

const LicenseGate: React.FC<LicenseGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'granted') {
      onUnlock();
    }
  }, [onUnlock]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'granted');
      onUnlock();
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%)',
      backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '48px 40px',
        width: '360px',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
        textAlign: 'center',
      }}>
        <div style={{
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #C9A84C, #F0D080)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px', fontSize: '28px',
        }}>G</div>

        <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: 700, letterSpacing: '3px', margin: '0 0 8px' }}>
          GLOBETROTTER
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', letterSpacing: '2px', margin: '0 0 32px' }}>
          TRAVEL LENS VIP ACCESS
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '2px', textAlign: 'left', marginBottom: '8px' }}>
            ACCESS CODE
          </label>
          <input
            type="password"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(''); }}
            placeholder="Enter Password"
            style={{
              width: '100%', padding: '14px 16px', borderRadius: '10px',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box',
              marginBottom: '16px',
            }}
          />
          {error && (
            <p style={{ color: '#ff6b6b', fontSize: '13px', marginBottom: '12px' }}>{error}</p>
          )}
          <button
            type="submit"
            style={{
              width: '100%', padding: '14px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #C9A84C, #F0D080)',
              border: 'none', color: '#1a1a1a', fontSize: '15px',
              fontWeight: 700, cursor: 'pointer', letterSpacing: '1px',
            }}
          >
            Submit
          </button>
        </form>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px', marginTop: '20px' }}>
          Default VIP Code required
        </p>
      </div>
    </div>
  );
};

export default LicenseGate;