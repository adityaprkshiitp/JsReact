import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
  <>
    <Navbar title="Textutils" about="About us"/>
    <div className="container">
      <TextForm heading = 'Enter the text here to analyse'/>
    </div>
  </>
  );
}

export default App;
