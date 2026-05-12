import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

   <header>
    <DaisyNav></DaisyNav>
   </header>
<main>

</main>
       
      
        <div>
          <h1 className='text-7xl'>Get started</h1>
         
        </div>
      
      

   

    

   
    </>
  )
}

export default App
