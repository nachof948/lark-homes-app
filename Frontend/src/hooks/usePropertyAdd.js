import { useEffect, useState } from 'react';
import * as api from '../api/index';

const usePropertyAdd = (user) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        if (user.propertyLikes.length > 0) {
          const propertyPromises = user.propertyLikes.map(id => api.getPublication(id));
          const propertyResponses = await Promise.all(propertyPromises);
          const propertiesData = propertyResponses.map(response => response.data);
          setProperties(propertiesData);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [user?.propertyLikes]);

  return properties;
};

export default usePropertyAdd;
