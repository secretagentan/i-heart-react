import logo from './logo.svg';
import './App.css';

function App(props) {
  console.log("props: ", props);
  return (
    <div className="App">
      {props.msg}
    </div>
  );
}

export default App;
