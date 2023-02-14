import './App.css';
import Heading from "./components/Heading";
import InputQuery from "./components/InputQuery";
import SubmitButton from "./components/SubmitButton";
import SubHeading from "./components/SubHeading";
function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Heading/>
        <InputQuery/>
        <SubHeading/>
        <SubmitButton/>
      </div>
    </div>
  );
}

export default App;
