import Chat from './chat/chat';

function App() {
  const name = "Vu";
  const loginTime = new Date();
  return (
    <div className="App">
      <Chat currentUser={name} date={loginTime}/>
    </div>
  );
}

export default App;
