import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

export default function Map() {
     
const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZ2xvYmFscGFybGkiLCJhIjoiY2s1dXZiNWJuMDVjaDNkcnYzMXUxMG1jYiJ9.VXd1wpxvWZn3HhiePC9J_A'
  });
    return (
        <div>
            <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}
            >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
            </Map>  
        </div>
    )
}
 


 
