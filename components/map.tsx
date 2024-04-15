"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

function Map({ coordinates }: { coordinates: [Lat: number, Lng: number] }) {
  const [position, setPosition] = useState([43.653225, -79.383186]);
  const [map, setMap] = useState(null);

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
      <Marker position={coordinates}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
