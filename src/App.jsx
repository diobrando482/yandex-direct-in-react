import './App.css'
import { Header } from './components/header/Header';
import { Content1 } from './components/TypeOfContent/Content1';
import { GirWithPhone } from './components/GirlWithPhone/GirWithPhone';
import { Section3 } from './components/Section3/Section3'
import { Section4 } from './components/Section4/Section4';
function App(props) {
  return (
    <>
      <Header/>
      <Content1/>
      <GirWithPhone />
      <Section3/>
      <Section4 />
    </>
  )
}

export default App
