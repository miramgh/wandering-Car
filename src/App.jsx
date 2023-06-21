
import './App.css'
import {Canvas } from '@react-three/fiber'
import Scene from './Scene'
import {Physics } from '@react-three/cannon'
import { useState , Suspense} from 'react'
import {BsArrowUpCircleFill , BsFillArrowDownCircleFill , BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill} from 'react-icons/bs'
import {AiTwotoneMinusCircle} from 'react-icons/ai'
function App() {
 
  const [movement , setMovement] = useState('')
  return (
    <>
    <div className='controls'>
          <button onClick={()=>setMovement('forward')}><BsArrowUpCircleFill/></button>
          <div className='rtAndLtControls'>

          <button onClick={()=>setMovement('left')}><BsFillArrowLeftCircleFill/></button>
          <button onClick={()=>setMovement('reset')}><AiTwotoneMinusCircle/></button>
          <button onClick={()=>setMovement('right')}><BsFillArrowRightCircleFill/></button>
          </div>
          <button onClick={()=>setMovement('backward')}><BsFillArrowDownCircleFill/></button>
    </div>
    <Suspense fallback ={null}>

 
    <Canvas>
      <Physics
        broadphase='SAP'
        gravity={[0, -2.5 , 0]}
      >

         <Scene movement={movement}/>
      </Physics>

    </Canvas>
    </Suspense>
    </>
  )
}

export default App
