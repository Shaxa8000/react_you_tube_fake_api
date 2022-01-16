import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SecondNav from '../components/SecondNav';
import Banner from '../components/Banner';
import { Container, Wrapper } from './style';

const Root = () => {
    return (
      <div>
        <Navbar />
        <Container>
          <Sidebar />
          <Wrapper>
            <SecondNav />
            <Banner />
          </Wrapper>
        </Container>
      </div>
    );
}

export default Root
