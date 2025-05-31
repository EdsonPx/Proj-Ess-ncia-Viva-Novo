import { MapContainer, TileLayer } from "react-leaflet";

export default function Mapa() {
  return (
    <MapContainer
      center={[38.7223, -9.1393]} // Coordenadas de Lisboa
      zoom={13}
      style={{ height: "600px", width: "800px" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
