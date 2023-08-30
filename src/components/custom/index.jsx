import React, { useState, useEffect } from 'react';
import './styles.css';
import { useFetch } from '../../api/useFetch';
import LoadingSpinner from '../../spinner';

export const CustomerSupport = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const reloadPage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulando una carga de 2 segundos
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='customer'>
          <ul>
            {data?.map((user) => (
              <div className='callCenterData' key={user.id}>
                <li> <b>Name  : </b>{user.name} </li>
                <li><b>Phone  : </b> {user.phone} </li>
                <li><b> City  : </b> {user.address.city} </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
