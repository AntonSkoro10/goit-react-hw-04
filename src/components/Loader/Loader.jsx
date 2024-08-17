import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Oval height={80} width={80} color="blue" />
    </div>
  );
}
