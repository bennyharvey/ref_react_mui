import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Box } from '@material-ui/core'
import { useMapStyles } from '../../components/Layout/styles'
interface MapProps {
    
}

const Map: React.FC<MapProps> =({}) => {
    const styles = useMapStyles();

    return (
        <>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className={styles.mapContainer}>
            {/* <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> */}
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </>
    )
}

export default Map