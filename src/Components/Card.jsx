import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from '../Components/utils/global.context';

const Card = ({ dentist }) => {
  const { name, username, id } = dentist;
  const { state, dispatch } = useContext(AppContext);
  const { favorites } = state;

  const isFavorite = favorites.some((favorite) => favorite.id === id);

  const addFav = (name, username, id) => {
    dispatch({
      type: "ADD",
      payload: {
        id,
        username,
        name,
      },
    })
  }

  const deleteFav = (id) => {
    dispatch({
      type: "REMOVE",
      payload: {
        id,
      },
    })
  }

  return (
    <>
      <div className="card">
        <img src="./images/doctor.jpg" alt="Doctor" />
        <Link to={"/dentist/" + id}>
          <h3 className="drDetails">{name}</h3>
        </Link>
        <p>{username}</p>
        {isFavorite ? (
          <button onClick={() => deleteFav(id)} className="removeButton">
            Remove Fav
          </button>
        ) : (
          <button
            onClick={() => addFav(name, username, id)}
            className="favButton"
          >
            Add fav
          </button>
        )}
      </div>
    </>
  )
}

export default Card;
