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
      // React Leaflet գրադարանի կոմպոնենտներ քարտեզի համար
      <MapContainer
        className={styles.map_container}
        center={position as [number, number]} // Քարտեզի կենտրոնի կոորդինատները՝ [լայնություն, երկայնություն]
        zoom={13} // Մեծացման մակարդակ (Zoom level)
      >
        {/* TileLayer՝ քարտեզի ֆոնային շերտի համար (OpenStreetMap) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap-ի համար նշված URL-ը
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker՝ քարտեզի վրա նշան տեղադրելու համար */}
        <Marker position={position}>
          {/* Popup՝ նշանի վրա սեղմելու դեպքում բացվող պատուհան */}
          <Popup>Երևան։</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
