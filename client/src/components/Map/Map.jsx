// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { HereIcon } from "./HerePin";
import Markers from "./Markers";
import { useContext } from "react";
import { resourceDataContext } from "../../Context/ResourseData";

export default function Map() {
  // --- set to dt Victora
  const position = [48.4284, -123.3657];

  const { resourceData } = useContext(resourceDataContext);

  return (
    <section className="map-component">
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a 
            href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker key={"youAreHere"} position={position} icon={HereIcon} />
        {resourceData && <Markers key={position} position={position} />}
      </MapContainer>
    </section>
  );
}
