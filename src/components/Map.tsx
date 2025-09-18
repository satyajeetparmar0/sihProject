"use client";

import { useState, useEffect } from "react";

export default function Map() {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (showMap && !window.google) {
      if (!document.getElementById("google-maps-script")) {
        const script = document.createElement("script");
        script.id = "google-maps-script";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          initMap();
        };
        document.body.appendChild(script);
      }
    } else if (showMap && window.google) {
      initMap();
    }
  }, [showMap]);

  const initMap = () => {
    const mapDiv = document.getElementById("map") as HTMLElement;
    if (mapDiv && !mapDiv.hasChildNodes()) {
      new window.google.maps.Map(mapDiv, {
        center: { lat: 27.3389, lng: 88.6065 }, // Sikkim default
        zoom: 10,
      });
    }
  };

  return (
    <div className="flex flex-col items-center mt-10"> {/* Added margin-top */}
      <button
        onClick={() => setShowMap(!showMap)}
        className="px-6 py-3 bg-teal-400 text-white font-semibold rounded-lg shadow-md hover:bg-teal-500 active:bg-teal-600 transition duration-200"
      >
        {showMap ? "Hide Map" : "Show Map"}
      </button>

      <div
        id="map"
        style={{
          width: "100%",
          height: showMap ? "400px" : "0",
          marginTop: showMap ? "1rem" : "0",
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      />
    </div>
  );
}
