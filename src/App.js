import React, { useEffect, useState } from 'react';
import { csv } from 'd3';
import './styles.scss';

import FoodTable from './components/FoodTable';
import Loader from './components/Loader';
import FilterList from './components/FilterList';

function App() {
  const [loading, setLoading] = useState(true);
  const [nutrients, setNutrients] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [filterInput, setFilterInput] = useState({ searchInput: '' });

  useEffect(() => {
    csv('food-nutritional-values.csv').then(data => {
      setLoading(false);
      setNutrients(data);
      setFilterList(data);
    });
  }, []);

  const filterFoods = () => {
    const filteredResult = nutrients.filter(food =>
      food['shrt_desc']
        .toLowerCase()
        .includes(filterInput.searchInput.toLowerCase())
    );
    setFilterList(filteredResult);
  };

  const handleInput = ({ target: { name, value } }) => {
    console.log(name, value);
    setFilterInput({ [name]: value });
    filterFoods();
  };
  return (
    <div className="App">
      <FilterList handleInput={handleInput} filterInput={filterInput} />
      <div className="App-container">
        {loading ? <Loader /> : <FoodTable nutrients={filterList} />}
      </div>
    </div>
  );
}

export default App;
