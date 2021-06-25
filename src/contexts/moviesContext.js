import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  //const [myMustWatch, setMustWatch] = useState( {} )
  const [myMustWatch, setMustWatch] = useState( [] )

  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
  };

  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  /*const addMustWatch = (movie, mustWatch) => {
    setMustWatch( {...myMustWatch, [movie.id]: mustWatch } )
    console.log(myMustWatch);
  };*/

  const addMustWatch = (movie) => {
    setMustWatch([...myMustWatch,movie.id])
  };

  const removeMustWatch = (movie) => {
    setMustWatch( myMustWatch.filter(
      (mId) => mId !== movie.id
    ) )
  };

 return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        myMustWatch,
        addMustWatch,
        removeMustWatch
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;