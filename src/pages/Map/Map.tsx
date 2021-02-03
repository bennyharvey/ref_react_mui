import React from 'react'
import { useMapStyles } from '../../components/Layout/styles'
import LeafletMap from '../../components/LeafletMap'

type MapProps = {
    stateCallbacks?: (() => void)[]
}

const Map: React.FC<MapProps> = (props) => {
    const styles = useMapStyles()
    const center = []

    return (
        <LeafletMap mapContainer={styles.mapContainer} stateCallbacks={props.stateCallbacks}/>
    )
}

export default Map