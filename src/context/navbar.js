import React, {createContext, useState} from 'react';
import { data } from '../Mock/secondnav';


export const Nav = createContext();

const Navbar = ({ children }) => {
    const [state, setState] = useState(data)
    return (
        <Nav.Provider value={[state, setState]}>
            {children}
        </Nav.Provider>
    )
}

export default Navbar
