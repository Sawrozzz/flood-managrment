import React, { useEffect } from "react";
import Header from "../../components/Header";
import Mapp from "../../assets/map.jpg";
import './map.css'
// import * as Module from './Mapp.jsx'



const Map = () => {
  // var map = L.map('map').setView([27.133046, 85.484083], 13);

  // // L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  // // 	maxZoom: 17,
  // // 	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  // // });

  // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   maxZoom: 19,
  //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  // }).addTo(map);
  // var marker = L.marker([51.5, -0.09]).addTo(map);
  // marker.bindPopup("<div class='custom-popup'>This is a custom popup.</div>");


  // let showed = false;


  // document.querySelector('.show-area').addEventListener('click', function () {
  //   if (showed === false) {
  //     var polygon = L.polygon([
  //       [27.14, 85.49],
  //       [27.133, 85.55],
  //       [27.13305, 85.499],

  //     ]).addTo(map);

  //     showed = true;
  //   }

  // }
  // )
  return (
    <div>
      <Header />
      <div className="map"></div>
      <button className="show-area">show affected region</button>


      {/* <Module /> */}
    </div>
  );
};

export default Map;
