import React, { useState, useEffect } from 'react';

function Row({title}) {
  const [movies, setMovies] = useState([]);
  useEffect(()=> {

  }, []);
  return (<div>
      <h2>{title}</h2>
  </div>);
}

export default Row;
