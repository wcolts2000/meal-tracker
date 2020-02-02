import React, { useEffect, useState } from 'react';
import { csv } from 'd3';
import './App.css';
import './styles.scss';

import FoodTable from './components/FoodTable';
import Loader from './components/Loader';
import FilterList from './components/FilterList';

function App() {
  const [loading, setLoading] = useState(true);
  const [nutrients, setNutrients] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    csv('food-nutritional-values.csv').then(data => {
      console.log('***DATA***', data);
      setLoading(false);
      setNutrients(data);
    });
  }, []);

  return (
    <div className="App">
      <FilterList />
      <div className="App-container">
        {loading ? <Loader /> : <FoodTable nutrients={nutrients} />}
      </div>
    </div>
  );
}

export default App;
