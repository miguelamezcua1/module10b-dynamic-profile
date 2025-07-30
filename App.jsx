import Profile from './Profile';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Profile
        name="LeBron James"
        occupation="Professional Athlete"
        funFact="Won four NBA championships and is known for his philanthropic work."
      />
    </div>
  );
}

export default App;
