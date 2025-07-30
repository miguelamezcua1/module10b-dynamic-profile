// Profile.jsx
// A simple profile card component using props and state for interactivity.

import { useState } from 'react';

function Profile({ name, occupation, funFact }) {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => setShowDetail(!showDetail);

  return (
    <div
      style={{
        maxWidth: '400px',
        padding: '24px',
        margin: '30px auto',
        border: '1px solid #ccc',
        borderRadius: '12px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#fff',
      }}
    >
      <h2 style={{ fontSize: '24px', color: '#333' }}>{name}</h2>
      <p style={{ fontSize: '18px', color: '#555' }}>{occupation}</p>

      <button
        onClick={toggleDetail}
        style={{
          padding: '8px 16px',
          fontSize: '14px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '12px',
        }}
      >
        {showDetail ? 'Hide Fun Fact' : 'Show Fun Fact'}
      </button>

      {showDetail && (
        <p style={{ marginTop: '16px', fontSize: '15px', color: '#444' }}>
          {funFact}
        </p>
      )}
    </div>
  );
}

export default Profile;
