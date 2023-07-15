
import './App.css'
import Caculator from './components/Caculator'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import Login from './components/Login'
import ShowInfor from './components/ShowInfor'
// import Login from './components/Login'
// import ParentMount from './components/ParentMount'

function App() {

  return (
    <>
      {/* <Counter /> */}
      <Login />
      {/* <ParentMount /> */}
      {/* <ComponentA></ComponentA>
      <ComponentB></ComponentB> */}
      <ShowInfor></ShowInfor>
      <Caculator></Caculator>

    </>
  )
}

export default App
