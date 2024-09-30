
import './App.css'
import { ColorTable } from './assets/ColorTable'
import { Fejléc } from './assets/fejléc'
import { Lábléc } from './assets/labléc'
import { Legördülö } from './assets/legördülölist'
import { Recept } from './assets/Recept'
import { Receptlista } from './assets/receptlist'


function App() {
  

  return (
    <>
        <Fejléc></Fejléc>
        <Recept color='red' személy={2}></Recept>
        <Recept color='green' személy={3}></Recept>
        <Receptlista></Receptlista>
        <Legördülö></Legördülö>
        <ColorTable></ColorTable>
        <Lábléc></Lábléc>
    </>
  )
}

export default App
