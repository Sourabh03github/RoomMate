import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import marker from "../maps/shop.svg";
import { urlFor, client } from "../../client";

import "./maps.css";

const Maps = () => {
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    const query = '*[_type == "dealers"]';

    client.fetch(query).then((data) => {
      setDealers(data);
    });
  }, []);

  const icon = new Icon({
    iconUrl: marker,
    iconSize: [45, 45],
  });
  //   const [activePark, setActivePark] = useState(null);
  return (
    <>
      <br />
      <br />
      <h2 style={{ textAlign: "center" }}>Dealers In Pune</h2>
      <MapContainer
        center={[18.5204, 73.8567]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {dealers.map((data, index) => (
          <Marker
            key={index}
            position={[data.latitude, data.longitude]}
            icon={icon}
          >
            <Popup>
              <div className="maps_popup">
                <div className="maps_popup-title">{data.firmName}</div>
                <hr />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <br />
      <br />
      <h2 style={{ textAlign: "center" }}>Dealers All Over the Maharashtra</h2>
      <MapContainer center={[18.5204, 73.8567]} zoom={7} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {dealers.map((data, index) => (
          <Marker
            onClick={() => {
              // setActivePark(park);
              console.log("hi");
            }}
            key={index}
            position={[data.latitude, data.longitude]}
            icon={icon}
          >
            <Popup>
              <div className="maps_popup">
                <div className="maps_popup-title">{data.firmName}</div>
                <hr />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Maps;
