import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterList from './components/HookCounterList'
import HookCounterFour from './components/HookCounterFour'

function App() {
  return (
    <div className="App">
      <Welcome>
      </Welcome>
      <HookCounter></HookCounter>
      <HookCounterTwo></HookCounterTwo>
      <HookCounterList></HookCounterList>
      <HookCounterFour>
      </HookCounterFour>
    </div>
  );
}

export default App;
