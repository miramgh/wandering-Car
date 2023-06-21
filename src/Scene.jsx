import React ,{useState , useEffect }from 'react'
import {
    Environment,
    OrbitControls,
    PerspectiveCamera
} from '@react-three/drei'

import { Suspense } from 'react'
import Track from './Track'
import Ground from './Ground'
import Car from './Car'

function Scene({movement}) {
  const [thirdPerson, setThirdPerson] = useState(true);
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
  
  useEffect(() => {
    function keydownHandler(e) {
      if (e.key == "k") {
        // random is necessary to trigger a state change
        if(thirdPerson) setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
        setThirdPerson(!thirdPerson); 
      }
    }

    window.addEventListener("keydown", keydownHandler);
    return () => window.removeEventListener("keydown", keydownHandler);
  }, [thirdPerson]);

  
  return (
    <Suspense fallback={null}>
        <Environment
            files={'textures/envmap.hdr'}
            background={"both"}
        />
         <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
      {!thirdPerson && (
        <OrbitControls target={[-2.64, -0.71, 0.03]} />
      )}
       <Track/>
        <Car thirdPerson ={thirdPerson} movement={movement}/>
        <Ground/>
    </Suspense>
  )
}

export default Scene