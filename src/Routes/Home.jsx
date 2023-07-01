import React, { useContext } from 'react';
import Card from '../Components/Card';
import { AppContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

const Home = () => {
  const { state} = useContext(AppContext);
  const { theme, dentists } = state;

  const addFav = (dentist) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []; 
    favorites.push(dentist);
    localStorage.setItem('favorites', JSON.stringify(favorites));
     
    console.log('Dentista agregado a favoritos:', dentist);
  };

  return (
    <main className={`home ${theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {Array.isArray(dentists) &&
          dentists.map((dentist) => (
            <Card key={dentist.id} dentist={dentist}>
              <button onClick={() => addFav(dentist)}>
                ADD FAV
              </button>
              <Link to={`/dentist/${dentist.id}`}>Ver detalles</Link>
            </Card>
          ))}
      </div>
    </main>
  );
};

export default Home;