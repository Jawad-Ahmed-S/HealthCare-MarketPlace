// // import { MapContainer, TileLayer, Marker, Popup,useMap,ZoomControl } from 'react-leaflet';
// // import { LatLngExpression } from 'leaflet';
// // import L from 'leaflet';
// // import 'leaflet/dist/leaflet.css';
// import { useEffect } from 'react';

// export default function LiveMap() {
//   useEffect(() => {
//     delete (L).Icon.Default.prototype._getIconUrl;
//     (L).Icon.Default.mergeOptions({
//       iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//       iconUrl: require('leaflet/dist/images/marker-icon.png'),
//       shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
//     });
//   }, []);

//   const position: LatLngExpression = [51.505, -0.09];

//   return (
//     <div>
// {/* 
//     // <MapContainer
//     //   center={position} 
//     //   zoom={13} 
//     //   scrollWheelZoom={false} 
//     //   style={{ height: "500px", width: "100%" }}
//     // >
//     //   <TileLayer
//     //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     //     // attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
//     //   />
//     //   <Marker position={position}>
//     //     <Popup>
//     //       A pretty CSS3 popup. <br /> Easily customizable.
//     //     </Popup>
//     //   </Marker>
//     // </MapContainer> */}
//     </div>
//   );
// }
