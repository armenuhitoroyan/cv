import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../../style/Contact.module.css";

const Map: React.FC = () => {
  const position: [number, number] = [40.1792, 44.4991]; // Երևանի կոորդինատները

  return (
    <div
      className={`w-full flex-col flex justify-center lg:flex-column  ${styles.map}`}
    >
      <MapContainer
        className={styles.map_container}
        center={position as [number, number]}
        zoom={13}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Երևան։</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
