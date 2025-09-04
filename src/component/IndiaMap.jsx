

// import React from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { scaleLinear } from "d3-scale";
// import { Tooltip } from "react-tooltip";
// import indiaGeo from "../component/State.file.json"; // Make sure this path is correct

// const participationData = {
//   Maharashtra: 1000,
//   Karnataka: 200,
//   Rajasthan: 2000,
//   Assam: 1500,
//   "Uttar Pradesh": 500,
// };

// const colorScale = scaleLinear()
//   .domain([0, Math.max(...Object.values(participationData))])
//   .range(["#d0f0d0", "#006400"]);

// const IndiaMap = () => {
//   return (
//     <>
//       <ComposableMap
//         projection="geoMercator"
//         projectionConfig={{ scale: 1000, center: [82.8, 22.5] }}
//         width={800}
//         height={600}
//         style={{ backgroundColor: "white" }}
//       >
//         <Geographies geography={indiaGeo}>
//           {({ geographies }) =>
//             geographies.map((geo) => {
//               const stateName =
//                 geo.properties.NAME_1 || geo.properties.NAME || "Unknown";
//               const value = participationData[stateName] || 0;
//               const fillColor = value > 0 ? colorScale(value) : "#EEE";

//               return (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   fill={fillColor}
//                   stroke="#000"
//                   strokeWidth={0.5}
//                   data-tooltip-id="map-tooltip"
//                   data-tooltip-content={`${stateName}: ${value} participants`}
//                   style={{
//                     default: { outline: "none" },
//                     hover: { outline: "none", cursor: "pointer" },
//                     pressed: { outline: "none" },
//                   }}
//                 />
//               );
//             })
//           }
//         </Geographies>
//       </ComposableMap>
//       <Tooltip id="map-tooltip" />
//     </>
//   );
// };

// export default IndiaMap;








// import React, { useEffect, useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { scaleLinear } from "d3-scale";
// import { Tooltip } from "react-tooltip";

// // URL to your Gist-hosted GeoJSON
// const geoUrl = "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/" +
//                "raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

// const participationData = {
//   Maharashtra: 500,
//   Karnataka: 200,
//   Rajasthan: 100,
//   // Add more states as needed
// };

// const colorScale = scaleLinear()
//   .domain([0, Math.max(...Object.values(participationData))])
//   .range(["#d0f0d0", "#006400"]);

// const IndiaMap = () => {
//   const [geoData, setGeoData] = useState(null);

//   useEffect(() => {
//     // Fetch GeoJSON once when component mounts
//     fetch(geoUrl)
//       .then((resp) => resp.json())
//       .then((data) => setGeoData(data))
//       .catch((err) => console.error("Error loading GeoJSON:", err));
//   }, []);

//   return (
    
//     <div>
//       {!geoData ? (
//         <p>Loading map data…</p>
//       ) : (
//         <ComposableMap projection="geoMercator" width={800} height={600}>
//           <Geographies geography={geoData}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const name = geo.properties.ST_NM; // matches your GeoJSON property
//                 const value = participationData[name] || 0;

//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={colorScale(value)}
//                     stroke="#FFF"
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>
     
//       )}
//     </div>
//   );
// };

// export default IndiaMap;











// import React, { useEffect, useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { scaleLinear } from "d3-scale";
// import ReactTooltip from "react-tooltip";

// // URL to your Gist-hosted GeoJSON
// const geoUrl =
//   "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/" +
//   "raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

// const participationData = {
//   Maharashtra: 500,
//   Karnataka: 200,
//   Rajasthan: 100,
//   // Add more states as needed
// };

// const colorScale = scaleLinear()
//   .domain([0, Math.max(...Object.values(participationData))])
//   .range(["#d0f0d0", "#006400"]);

// const IndiaMap = () => {
//   const [geoData, setGeoData] = useState(null);
//   const [tooltipContent, setTooltipContent] = useState("");

//   useEffect(() => {
//     // Fetch GeoJSON once when component mounts
//     fetch(geoUrl)
//       .then((resp) => resp.json())
//       .then((data) => setGeoData(data))
//       .catch((err) => console.error("Error loading GeoJSON:", err));
//   }, []);

//   return (
//     <div>
//       {!geoData ? (
//         <p>Loading map data…</p>
//       ) : (
//         <>
//           <ComposableMap
//             projection="geoMercator"
//             width={800}
//             height={600}
//             data-tip="" // needed for ReactTooltip to trigger
//           >
//             <Geographies geography={geoData}>
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const name = geo.properties.ST_NM;
//                   const value = participationData[name] || 0;

//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={colorScale(value)}
//                       stroke="#FFF"
//                       onMouseEnter={() => {
//                         setTooltipContent(`${name}: ${value}`);
//                       }}
//                       onMouseLeave={() => {
//                         setTooltipContent("");
//                       }}
//                       style={{
//                         default: { outline: "none" },
//                         hover: { fill: "#ffcc00", outline: "none" },
//                         pressed: { outline: "none" },
//                       }}
//                     />
//                   );
//                 })
//               }
//             </Geographies>
//           </ComposableMap>

//           <ReactTooltip>{tooltipContent}</ReactTooltip>
//         </>
//       )}
//     </div>
//   );
// };

// export default IndiaMap;








// import React, { useEffect, useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { scaleLinear } from "d3-scale";

// // URL to your Gist-hosted GeoJSON
// const geoUrl =
//   "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/" +
//   "raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

// const participationData = {
//   Maharashtra: 500,
//   Karnataka: 200,
//   Rajasthan: 100,
//   // Add more states as needed
// };

// const colorScale = scaleLinear()
//   .domain([0, Math.max(...Object.values(participationData))])
//   .range(["#d0f0d0", "#006400"]);

// const IndiaMap = () => {
//   const [geoData, setGeoData] = useState(null);
//   const [tooltip, setTooltip] = useState({ visible: false, content: "", x: 0, y: 0 });

//   useEffect(() => {
//     // Fetch GeoJSON once when component mounts
//     fetch(geoUrl)
//       .then((resp) => resp.json())
//       .then((data) => setGeoData(data))
//       .catch((err) => console.error("Error loading GeoJSON:", err));
//   }, []);

//   return (
//     <div style={{ position: "relative" }}>
//       {!geoData ? (
//         <p>Loading map data…</p>
//       ) : (
//         <>
//           <ComposableMap projection="geoMercator" width={800} height={600}>
//             <Geographies geography={geoData}>
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const name = geo.properties.ST_NM;
//                   const value = participationData[name] || 0;

//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={colorScale(value)}
//                       stroke="#FFF"
//                       onMouseEnter={(event) => {
//                         setTooltip({
//                           visible: true,
//                           content: `${name}: ${value}`,
//                           x: event.clientX,
//                           y: event.clientY,
//                         });
//                       }}
//                       onMouseMove={(event) => {
//                         setTooltip((prev) => ({
//                           ...prev,
//                           x: event.clientX,
//                           y: event.clientY,
//                         }));
//                       }}
//                       onMouseLeave={() => {
//                         setTooltip({ visible: false, content: "", x: 0, y: 0 });
//                       }}
//                       style={{
//                         default: { outline: "none" },
//                         hover: { fill: "#ffcc00", outline: "none" },
//                         pressed: { outline: "none" },
//                       }}
//                     />
//                   );
//                 })
//               }
//             </Geographies>
//           </ComposableMap>

//           {/* Custom Tooltip */}
//           {tooltip.visible && (
//             <div
//               style={{
//                 position: "fixed",
//                 top: tooltip.y + 10,
//                 left: tooltip.x + 10,
//                 background: "rgba(0,0,0,0.7)",
//                 color: "#fff",
//                 padding: "5px 10px",
//                 borderRadius: "4px",
//                 fontSize: "14px",
//                 pointerEvents: "none",
//                 zIndex: 1000,
//               }}
//             >
//               {tooltip.content}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default IndiaMap;






import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { Tooltip } from "react-tooltip"; // ✅ use Tooltip from react-tooltip

// URL to your Gist-hosted GeoJSON
const geoUrl =
  "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/" +
  "raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

const participationData = {
  Maharashtra: 500,
  Karnataka: 200,
  Rajasthan: 100,
  // Add more states as needed
};

const colorScale = scaleLinear()
  .domain([0, Math.max(...Object.values(participationData))])
  .range(["#d0f0d0", "#006400"]);

const IndiaMap = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    // Fetch GeoJSON once when component mounts
    fetch(geoUrl)
      .then((resp) => resp.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Error loading GeoJSON:", err));
  }, []);

  return (
    <div>
      {!geoData ? (
        <p>Loading map data…</p>
      ) : (
        <>
          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 1000, center: [82.8, 22.5] }} >
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const name = geo.properties.ST_NM;
                  const value = participationData[name] || 0;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={colorScale(value)}
                      stroke="#000"
                      data-tooltip-id="map-tooltip" // ✅ attach tooltip ID
                      data-tooltip-content={`${name}: ${value}`} // ✅ tooltip content
                      style={{
                        default: { outline: "none" },
                        // hover: { fill: "#ffcc00", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {/* ✅ Tooltip Component */}
          <Tooltip id="map-tooltip"  className="cstm-sec-mr" />
        </>
      )}
    </div>
  );
};

export default IndiaMap;
