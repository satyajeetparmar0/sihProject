"use client"; 
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import { useState } from "react";

export default function GoogleMapComponent() {
  const [directions, setDirections] = useState(null);

  // Example monasteries (lat/lng) in Sikkim
  const monasteries = [
    { lat: 27.3389, lng: 88.6065 }, // Rumtek
    { lat: 27.3756, lng: 88.6120 }, // Enchey
    { lat: 27.3246, lng: 88.6159 }, // Ranka
  ];

  const containerStyle = { width: "100%", height: "500px" };
  const center = monasteries[0]; // Start from first monastery

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Request Directions */}
        {!directions && (
          <DirectionsService
            options={{
              origin: monasteries[0],
              destination: monasteries[monasteries.length - 1],
              waypoints: monasteries.slice(1, -1).map((m) => ({ location: m })),
              travelMode: "DRIVING",
            }}
            callback={(response) => {
              if (response !== null && response.status === "OK") {
                setDirections(response);
              }
            }}
          />
        )}

        {/* Render the route */}
        {directions && (
          <DirectionsRenderer
            options={{
              directions: directions,
              suppressMarkers: false, // Set to true if you want custom markers
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}
