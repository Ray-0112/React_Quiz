import logo from './logo.svg';
import HelloCGU from './cgu_hello'
import MultiButton from './cgu_multiButton'
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
        { HelloCGU() }
      </div>
      <div>
      {MultiButton(10)}
      </div>
    </div>

  );
}

export default App;
