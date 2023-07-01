import React, { createContext, useEffect, useReducer } from 'react';


// Definir el estado inicial
const initialState = {
  theme: 'light',
  dentists: [],
  favorites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'ADD':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE':
      return { ...state, favorites: state.favorites.filter(dentist => dentist.id !== action.payload.id) };
    default:
      throw new Error()
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'SET_DENTISTS', payload: data });
      } catch (error) {
        console.log('Error al obtener los dentistas:', error);
      }
    };

    fetchDentists();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};