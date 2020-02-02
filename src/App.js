import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { csv } from 'd3';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [nutrients, setNutrients] = useState([]);
  useEffect(() => {
    csv('food-nutritional-values.csv').then(data => {
      console.log('***DATA***', data);
      setLoading(false);
      setNutrients(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-container">
        <div>
          {loading ? (
            <>
              <img src={logo} className="App-logo" alt="logo" />
              <p>Loading...</p>
            </>
          ) : (
            <table>
              <thead>
                <tr className="tHeaders">
                  <th>Short Description</th>
                  <th>Calories</th>
                  <th>Protein</th>
                  <th>Carbohydrates</th>
                  <th>Fiber</th>
                  <th>Sugar</th>
                  <th>Saturated Fats</th>
                  <th>Monosaturated Fats</th>
                  <th>Polysaturated Fats</th>
                  <th>Weight 1</th>
                  <th>Weight 1 Description</th>
                  <th>Weight 2</th>
                  <th>Weight 2 Description</th>
                </tr>
              </thead>
              <tbody>
                {nutrients.map((food, i) => (
                  <tr key={i}>
                    <td>{food.shrt_desc}</td>
                    <td>{food.energ_kcal}</td>
                    <td>{food.protein_g}</td>
                    <td>{food.carbohydrt_g}</td>
                    <td>{food.fiber_td_g}</td>
                    <td>{food.sugar_tot_g}</td>
                    <td>{food.fa_sat_g}</td>
                    <td>{food.fa_mono_g}</td>
                    <td>{food.fa_poly_g}</td>
                    <td>{food.gmwt_1}</td>
                    <td>{food.gmwt_desc1}</td>
                    <td>{food.gmwt_2}</td>
                    <td>{food.gmwt_desc2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
