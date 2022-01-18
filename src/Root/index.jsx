import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SecondNav from '../components/SecondNav';
import Banner from '../components/Banner';
import { Container, Wrapper } from './style';
import { BrowserRouter as Router, Routes, Route, createRoutesFromChildren } from 'react-router-dom';
import { sidebar } from '../utils/sidebar';

const Root = () => {
    return (
      <div>
        <Navbar />
        <Container>
          <Router>
            <Sidebar />
            <Wrapper>
              <SecondNav />
              <Routes>
                {sidebar.map(({ component: Comp, path, id }) => (
                  <Route path={path} element={<Comp />} />
                ))}
              </Routes>
            </Wrapper>
          </Router>
        </Container>
      </div>
    );
}

export default Root
