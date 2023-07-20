
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/template/Layout'
import Tasks from './components/Tasks'
import About from './components/About'
import ShowStudent from './components/pages/student/ShowStudent'
// import Caculator from './components/Caculator'
// import ComponentA from './components/ComponentA'
// import ComponentB from './components/ComponentB'
// import Login from './components/Login'
// import ShowInfor from './components/ShowInfor'
// import Login from './components/Login'
// import ParentMount from './components/ParentMount'

function App() {

  return (
    <>
      {/* <Counter />
      <Login />
      {/* <ParentMount /> */}
      {/* <ComponentA></ComponentA>
      <ComponentB></ComponentB> */}
      {/* <ShowInfor></ShowInfor>
      <Caculator></Caculator>  */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="tasks" element={<Tasks />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="show" element={<ShowStudent />} />
      </Routes>


    </>
  )
}

export default App
