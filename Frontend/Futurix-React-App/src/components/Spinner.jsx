import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner = ({color}) => {
  return (
    <ScaleLoader color={color} />
  );
};

export default Spinner;
