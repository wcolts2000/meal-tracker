import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { csv } from 'd3';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [nutrients, setNutrients] = useState([]);
  useEffect(() => {
    csv('abbrev-food-nutritional-values-QueryResult.csv').then(data => {
      console.log('***DATA***', data);
      setLoading(false);
      setNutrients(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {loading ? (
            <>
              <img src={logo} className="App-logo" alt="logo" />
              <p>Loading...</p>
            </>
          ) : (
            <p>{JSON.stringify(nutrients)}</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
