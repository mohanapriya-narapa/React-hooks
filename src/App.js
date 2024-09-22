import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react'
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
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
export const UserContext = React.createContext();
const intialState = {
  firstCounter: 0,
};
export const CountContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state , firstCounter: state.firstCounter + 1};
    case 'decrement':
      return {...state , firstCounter: state.firstCounter - 1};
    case 'reset':
      return intialState;
    default:
      return state;
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, intialState);
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
      {/* <UseReducerCounterObject></UseReducerCounterObject> */}
      <CountContext.Provider value ={{countState:count, countDispatch:dispatch}}> 
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
      </CountContext.Provider>

    </div>
  );
}

export default App;
