import React from "react";

import { TileLayer } from "leaflet";
import "leaflet-edgebuffer";

export type TileLayers = {
    [name: string]: TileLayer;
};

const tileLayerOptions = {
    edgeBufferTiles: 1,
    maxZoom: 22,
};

export const leafletTileLayers: TileLayers = {
    thunderforest: new TileLayer(
        "https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=93151572ff064f08a0e425cafb6bac79",
        {
            ...tileLayerOptions,
            attribution:
                '&copy <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
    ),
    osm: new TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { ...tileLayerOptions }),
};

export type MapState = {
    callbacks?: (() => void)[];
    name: string;
    activeTileLayer: TileLayer;
};

export type GlobalState = {
    mainMap: MapState;
};

export const initialGlobalState: GlobalState = {
    mainMap: {
        name: "main map name",
        activeTileLayer: leafletTileLayers.thunderforest,
    },
};

export const StateContext = React.createContext({
    globalState: initialGlobalState,
    setGlobalState: (state: any) => {},
});
