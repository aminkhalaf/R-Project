/* eslint-disable no-undef */
import React from "react"
import { compose, withProps, withStateHandlers, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = compose(
    withStateHandlers(() => ({
      isOpen: false,
      }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDuhjXCKdh95GnWx4KjBZIinDYFtyIeTlY&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: window.innerHeight }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,

  )((props) => (
    
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 30.078072, lng: 31.2953939 }}
  >
    {
      props.searchList.map((Location) =>
      //put the locations marker
      <Marker
        key={Location.id}
        position={Location.location} 
        onClick={(event) => {props.onMarkerClick(Location)} }
        defaultAnimation={google.maps.Animation.BOUNCE}
      >
      
      {//show InfoWindow to selected location
        (props.clickedID === Location.id) && (<InfoWindow onCloseClick={props.onToggleOpen}>
          <div tabIndex={Location.id+0} className='InfoWindow'>{Location.Info}</div>
        </InfoWindow>)
      }
      </Marker>
      )
    }
  </GoogleMap>
))

export default MyMapComponent;
