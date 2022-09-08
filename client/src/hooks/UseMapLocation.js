import { useState, useEffect } from 'react';
import axios from 'axios';
import dotenv from "dotenv";

dotenv.config()


const {
  REACT_APP_MAPS
  } = process.env;
  


const useGoogleAddress = address => {
  const [map, setMap] = useState({lat: 0, lng: 0});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${REACT_APP_MAPS}`;

  useEffect( () => {
    async function handler() {
        const response = await axios(API);
        
        setMap(response.data.results[0].geometry.location);
    }
    handler();
  },[]);
  return map;
};

export default useGoogleAddress;