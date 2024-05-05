"use client"
import { useEffect } from 'react';

function GoogleMap() {
  useEffect(() => {
    let script;

    function myMap() {
      const mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
      };
      const map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp
      );
    }

    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
      myMap();
    } else {
      script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCJ5l-9uLxLE4mvhL2uGbR-ZbJw9P-YQCo&callback=myMap`;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return <div id="googleMap" style={{ width: '100%', height: '400px' }}  className='border-[2px]'/>;
}

export default GoogleMap;
 