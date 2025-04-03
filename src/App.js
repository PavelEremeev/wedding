import './App.css';
import { Details } from './modules/Details/Details';
import { Dresscode } from './modules/Dresscode/Dresscode';
import Form from './modules/Form/Form';
import { Intro } from './modules/Intro/Intro';
import { Location } from './modules/Location/Location';

function App() {
  return (
    <div className="App">
			<Intro/>
			<Location/>
			<Dresscode/>
			<Details/>
			<Form/>
    </div>
  );
}

export default App;
