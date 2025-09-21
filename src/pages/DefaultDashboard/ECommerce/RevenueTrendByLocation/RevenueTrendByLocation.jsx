import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { ProgressBar } from 'react-step-progress-bar';
import "react-step-progress-bar/styles.css"; 

import './RevenueTrendByLocation.css';
import useAppStore from "../../../../stores/app";
import { useShallow } from "zustand/shallow";
import { useMemo } from "react";

const geoUrl ="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";


const RevenueTrendByLocation = () => {
  const { mapData } = useAppStore(useShallow((state) => ({
    mapData: state.mapData,
  })));

  const totalRevenue = useMemo(() => mapData.reduce((acc, { revenue }) => acc+revenue, 0), [mapData]);

  return (
    <div className="revenueTrendByLocation">
      <header>Revenue by Location</header>
      <ComposableMap
        className='map'
        projection="geoMercator"
        projectionConfig={{
          scale: 150,
        }}
      >
        <Geographies geography={geoUrl} className='geographies'>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="geography"
              />
            ))
          }
        </Geographies>
        {mapData.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={10} className="marker" strokeWidth={2} />
          </Marker>
        ))}
      </ComposableMap>
      <div className="progessBar">
        {mapData.map((location) => (
          <div key={location.name} className="locationData">
            <div className="metrics">
              <span>{location.name}</span>
              <span>{location.revenue}K</span>
            </div>
            <div>
              <ProgressBar
                percent={location.revenue*100/totalRevenue}
                filledBackground="#A8C5DA"
                height={3}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueTrendByLocation;
