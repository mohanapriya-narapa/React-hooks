import logo from './logo.svg';
import './App.css';
import React  from 'react'
import Welcome from './components/Welcome';
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterList from './components/HookCounterList'
import HookCounterFour from './components/HookCounterFour'
import HookUseEffect from './components/HookUseEffect'
import HookMouse from './components/HookMouse'
import IntervalHookCounter from './components/IntervalHookCounter'
import UseReducerCounterObject from './components/UseReducerCounterObject'
// import DataFetching from './components/DataFetching';
import ContextA from './components/ContextB';
export const UserContext=React.createContext();
function App() {

  return (
    <div className="App">
      {/* <Welcome>
      </Welcome>
      <HookCounter></HookCounter>
      <HookCounterTwo></HookCounterTwo>
      <HookCounterList></HookCounterList>
      <HookCounterFour>
      </HookCounterFour>
      <HookUseEffect></HookUseEffect> */}
      {/* <HookMouse></HookMouse> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <DataFetching>
      </DataFetching> */}
{/* <UserContext.Provider value='mohana'>
      <ContextA/>
      </UserContext.Provider>  */}
      <UseReducerCounterObject></UseReducerCounterObject>
    </div>
  );
}

export default App;
