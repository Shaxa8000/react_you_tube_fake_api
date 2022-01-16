import React, { createContext, useState } from 'react';
import { moviel } from '../Mock/movie';


export const Kino = createContext();

const Movie = ({ children }) => {
    const [kino, setKino] = useState(moviel)
    return (
        <Kino.Provider value={[kino, setKino]}>
            {children}
        </Kino.Provider>
    )
}

export default Movie
