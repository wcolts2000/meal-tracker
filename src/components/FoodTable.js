import React from 'react';
import PropTypes from 'prop-types';

export default function FoodTable({ nutrients }) {
  return (
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
  );
}

FoodTable.propTypes = {
  nutrients: PropTypes.array.isRequired
};
