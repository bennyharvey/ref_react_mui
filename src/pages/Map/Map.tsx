import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Box } from '@material-ui/core'
import { useMapStyles } from '../../components/Layout/styles'
import Leaflet from 'leaflet'
import 'leaflet-edgebuffer'


// all of this is very wrong and ugly and not in any way "react-way"
// but i haven't found an easy solution to adding third-party leaflet 
// plugins, apart from making full-blown react-leaflet plugin using its "core" api
let L: any
L = Leaflet
const MapHack = () => {
    const map = useMap()
    const tileLayerOptions = {
        edgeBufferTiles: 1
    }
    let ThunderforestSpinalMap  = L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}', {
        attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        apikey: '93151572ff064f08a0e425cafb6bac79',
        maxZoom: 22,
    })

    let tileLayerOSM = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', tileLayerOptions)

    map.addLayer(tileLayerOSM)

    const changeTileLayer = (id: number) => {
        if (id == 1) map.addLayer(ThunderforestSpinalMap)
    }
    return null
}

type MapProps = {
    
}

const Map: React.FC<MapProps> =({}) => {
    const styles = useMapStyles();

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className={styles.mapContainer}>
            <MapHack />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map