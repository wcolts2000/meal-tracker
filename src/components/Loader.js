import React from 'react';
import logo from '../logo.svg';

export default function Loader() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Loading<span>...</span>
      </p>
    </>
  );
}
