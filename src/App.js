import './App.css';
import FirstComponent from './components/FirstComponent'
import AnotherComponent from './components/AnotherComponent'
import Images from './components/Images'
import Hooks from './components/Hooks'
import RenderCond from './components/RenderCond'

function App() {
  return (
    <div className="App">
     <h2>Hello World</h2>
     <FirstComponent />
     <AnotherComponent />
     <Images />
     <Hooks />
     <RenderCond x={10} />
    </div>
  );
}

export default App;
