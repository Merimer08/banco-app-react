import { useState } from 'react';
import PropTypes from 'prop-types';
import './Summary.css';

function Summary({ movements }) {
  const [sortOrder, setSortOrder] = useState('desc');

  // Calcular totales
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  // Calcular interés (asumimos 1.2% de interés en depósitos positivos)
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  // Manejar el ordenamiento
  const handleSort = () => {
    setSortOrder(prevOrder => prevOrder === 'desc' ? 'asc' : 'desc');
  };

  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">
        {new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR'
        }).format(income)}
      </p>
      
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">
        {new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR'
        }).format(Math.abs(out))}
      </p>
      
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">
        {new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR'
        }).format(interest)}
      </p>
      
      <button className="btn--sort" onClick={handleSort}>
        {sortOrder === 'desc' ? '↓ SORT' : '↑ SORT'}
      </button>
    </div>
  );
}

Summary.propTypes = {
  movements: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Summary;
