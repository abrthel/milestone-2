import React from 'react';
import { useParams } from 'react-router-dom';

export default () => {
  const { id } = useParams();

  return (
    <p>Hello from product {id}</p>
  );
}
