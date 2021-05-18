import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./todoApp"

export default function App() {
  return (
    <div className="App">
      {Todo()}
    </div>
  );
}
