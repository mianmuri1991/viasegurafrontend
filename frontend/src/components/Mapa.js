import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../leaflet/react-leaflet.css';
import * as L from "leaflet";
import {MarkerIcon} from '../leaflet/react-leaflet-icon.js';

var Leve = L.icon({
    iconUrl: 'leve.png',
    iconSize:     [40, 45], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 0] // point from which the popup should open relative to the iconAnchor
});
var Grave = L.icon({
    iconUrl: 'grave.png',
    iconSize:     [30, 35], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 0] // point from which the popup should open relative to the iconAnchor
});
var Fatal = L.icon({
    iconUrl: 'fatal.png',
    iconSize:     [20, 35], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 0] // point from which the popup should open relative to the iconAnchor
});
export default class Mapa extends Component {
    render() {
        return (
        
        <MapContainer center={[-2.1883359,-79.927113]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-2.1888174,-79.91879173]} icon={Grave} >
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.1882203,-79.9255596 ]} icon={Leve}>
                <Popup>
                Leve
                </Popup>
            </Marker>
            <Marker position={[ -2.188143,-79.926842 ]} icon={Leve}>
                <Popup>
                Leve
                </Popup>
            </Marker>
            <Marker position={[ -2.1879705,-79.9251629 ]} icon={Fatal}>
                <Popup>
                Fatal
                </Popup>
            </Marker>
            <Marker position={[ -2.188108,-79.927576 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.188994,-79.9299211 ]} icon={Leve}>
                <Popup>
                Leve
                </Popup>
            </Marker>
            <Marker position={[ -2.1886405,-79.9191135 ]} icon={Fatal}>
                <Popup>
                Fatal
                </Popup>
            </Marker>
            <Marker position={[ -2.1882576,-79.9282001 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.192547,-79.934612 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.189562,-79.9308768 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.1881234,-79.927113 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.1881026,-79.9274121 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.1881285,-79.9268802 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.1929544,-79.9352644 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.190285,-79.9320858 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.188658,-79.916894 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.1883359,-79.9266188 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
            <Marker position={[ -2.191935,-79.934038 ]} icon={Grave}>
                <Popup>
                Grave
                </Popup>
            </Marker>
        </MapContainer>);
    }
}
