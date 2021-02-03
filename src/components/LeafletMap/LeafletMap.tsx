import React, { useContext } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { Box } from "@material-ui/core"
import { useMapStyles } from "../../components/Layout/styles"
import Leaflet from "leaflet"
import "leaflet-edgebuffer"
import { StateContext } from "../../components/App/StateContext"


type LeafletMapProps = {
    mapContainer: string
    center?: Leaflet.LatLngTuple | Leaflet.LatLng | Leaflet.LatLngLiteral | undefined
    zoom?: number
    stateCallbacks?: (() => void)[]
}

const defaultMapCenter: Leaflet.LatLngTuple = [51.505, -0.09]
const defaultZoom = 13

const LeafletMap: React.FC<LeafletMapProps> = (props) => {
    const center = props.center !== undefined ? props.center : defaultMapCenter
    const zoom = props.zoom !== undefined ? props.zoom : defaultZoom

    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} className={props.mapContainer}>
            <MapHack mapContainer={props.mapContainer} stateCallbacks={props.stateCallbacks} />
            <Marker position={center}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

// all of this is very wrong and ugly and not in any way "react-way"
// but i haven't found an easy solution to adding third-party leaflet
// plugins, apart from making full-blown react-leaflet plugin using its "core" api
let L: any
L = Leaflet
const MapHack = (props: LeafletMapProps) => {
    const { globalState, setGlobalState } = useContext(StateContext);

    const map = useMap()
    const tileLayerOptions = {
        edgeBufferTiles: 1,
    }
    let ThunderforestSpinalMap = L.tileLayer(
        "https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}",
        {
            ...tileLayerOptions,
            attribution:
                '&copy <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            apikey: "93151572ff064f08a0e425cafb6bac79",
            maxZoom: 22,
        }
    )

    let tileLayerOSM = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", tileLayerOptions)

    map.addLayer(globalState.mainMap.activeTileLayer)

    const changeTileLayer = (id: number) => {
        if (id == 1) map.addLayer(ThunderforestSpinalMap)
    }
    return null
}

export default LeafletMap
