"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MarkerIcon from "../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../node_modules/leaflet/dist/images/marker-shadow.png";

function Map({ coordinates }: { coordinates: [Lat: number, Lng: number] }) {
  return (
    <MapContainer
      className="w-[100%] lg:w-[30%]"
      center={coordinates}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "320px", borderRadius: "8px" }}
      //   whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={
          new L.Icon({
            iconUrl: MarkerIcon.src,
            iconRetinaUrl: MarkerIcon.src,
            iconSize: [20, 30],
            iconAnchor: [12.5, 41],
            popupAnchor: [0, -41],
            shadowUrl: MarkerShadow.src,
            shadowSize: [41, 41],
          })
        }
        position={coordinates}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
