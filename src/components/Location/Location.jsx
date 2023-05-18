// import React from 'react'
// import GoogleMapReact from 'google-map-react';
//  import { useState } from 'react'
//  import axios from 'axios'
// import { useEffect } from 'react';


// const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
// const API_key = `d0451ea1e2a1b36fbddc4c399eff766a`;

// const Location = () => {

//         const [latitude, setLatitude] = useState('');
//         const [longitude, setLongitude] = useState('');
//         const [responseData, setResponseData] = useState({});


//         useEffect(() => {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 setLatitude(position.coords.latitude);
//                 setLongitude(position.coords.longitude)})
//             // }) AIzaSyCYA8BhUn_22mysmnmoXuJxJsn9f915_cQ



//             axios.get(`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`).then((response) => {
//                 setResponseData(response.data)

//             })

//         }, [])

//         dispatch(fetchAllUsers(responseData.name)) ;
//         setLocate(responseData.name);
//          dispatch(fetchAllUsers(locate));

//     return (
//         <div>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: "AIzaSyCYA8BhUn_22mysmnmoXuJxJsn9f915_cQ" }}
//                 defaultCenter={this.props.center}
//                 defaultZoom={this.props.zoom}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//             >

//             </GoogleMapReact>
//         </div>

//     )
// }

// export default Location


// import React, { Component } from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const containerStyle = {
//     width: '400px',
//     height: '400px'
// };



// const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
// const API_key = `d0451ea1e2a1b36fbddc4c399eff766a`

// const Location = () => {
//     {

//         const [latitude, setLatitude] = useState('');
//         const [longitude, setLongitude] = useState('');
//         const [responseData, setResponseData] = useState({});

//         useEffect(() => {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 setLatitude(position.coords.latitude);
//                 setLongitude(position.coords.longitude)
//             })



//             axios.get(`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`).then((response) => {
//                 setResponseData(response.data)

//             })

//         }, [])

//         let center = {
//             lat: latitude,
//             lng: longitude
//         };

//         return (
//             <LoadScript
//                 googleMapsApiKey="AIzaSyCYA8BhUn_22mysmnmoXuJxJsn9f915_cQ"
//             >
//                 <GoogleMap
//                     mapContainerStyle={containerStyle}
//                     center={center}
//                     zoom={20}
//                 >
//                     { /* Child components, such as markers, info windows, etc. */}
//                     <></>
//                 </GoogleMap>
//             </LoadScript>
//         )
//     }
// }

// export default Location;