import React from 'react';
// import Sidebar from './sidebar';
import Navbar from './navbar';
import Movie from './movieList';

const Context = ({children}) => {
    return (
      <div>
        <Navbar>
          {/* <Sidebar> */}
            <Movie>{children}</Movie>
          {/* </Sidebar> */}
        </Navbar>
      </div>
    );
}

export default Context
