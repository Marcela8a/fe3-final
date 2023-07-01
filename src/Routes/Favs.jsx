import React, { useContext } from 'react';
import { AppContext } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Favs = () => {
  const { state } = useContext(AppContext);
  const { favorites } = state;
  return (
    <div>
      <h1>Dentists Favs</h1>
      {favorites.length === 0 ? (
        <h5
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Tienes Dentistas Favoritos, Agrega al menos 1!
        </h5>
      ) : (
        <div className="card-grid">
          {favorites?.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              username={dentist.username}
              name={dentist.name}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favs;
