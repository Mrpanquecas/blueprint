import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import blueprintURL from "./img/blueprint.jpg"
import { useState } from 'react';
import default_map from './services/utils';
import Blueprint from "./Blueprint/Blueprint"



function App() {

  const [map, setMap] = useState(default_map)
  const onBlueprintClick = (event) => {
    if(event.target.id === 'blueprint') {
      const newMap = [
        ...map,
        {
          name: `${event.timeStamp}`,
          coords: {x: event.nativeEvent.layerX, y: event.nativeEvent.layerY }
        }
      ]
  
      console.log(event, newMap);
      setMap(newMap)
    }
  }

  const onClick = (e) => {
    console.log(e);
  }

  const onHoverInArea = (e, a) => {
    console.log(e, a);
  }
  const onHoverOutArea = (e, a) => {
    console.log(e, a);
  }

  console.log(map)
  return (
    <div className="App">
      <Blueprint
        onHoverInArea={onHoverInArea}
        onHoverOutArea={onHoverOutArea}
        src={blueprintURL}
        onClick={onBlueprintClick}
        areas={map}
      />
    </div>
  );
}

export default App;
