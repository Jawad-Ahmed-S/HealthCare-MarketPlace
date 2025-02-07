import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression,Icon } from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

export default function LiveMap() {
  useEffect(() => {
   L.Icon.Default.mergeOptions({
      iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).toString(),
      iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).toString(),
      shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).toString(),
    });
  }, []);

  const position: LatLngExpression = [51.505, -0.09];

  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
