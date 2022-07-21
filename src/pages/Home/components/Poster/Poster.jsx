import React, { Suspense } from 'react'

//import components 
import Earth from '../Earth/Earth';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';

//assets 
import "./Poster.styles.css"

const Poster = () => {
    return (
        <div style={{ backgroundColor:"#310047"}}>
            <h1 className="poster-title">Mentorverse</h1>
            <div className="poster-desc">
                <h3>Organised by the Singapore Mentorship Committee</h3>
                <p>Series of 4 impactful workshops led by <span>CEOs and business leaders</span></p>
            </div>

            <div className="poster-objects">
                <Canvas 
                    camera={{ fov: 35, zoom: 3, near: 1, far: 1000 }}>
                    {/* <OrbitControls> */}
                        <Suspense fallback={null}>
                            <Earth/>
                        </Suspense>
                    {/* </OrbitControls> */}
                    
                </Canvas>
            </div>
            
            
        </div>
    )
}

export default Poster