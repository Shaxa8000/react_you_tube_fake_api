import React, {useContext} from 'react';
import { Container, Wrapper, Title, Border } from './style';
// import { Side } from '../../context/sidebar';
import { sidebar } from '../../utils/sidebar';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    // const [mock, setMock] = useContext(Side);
    return (
      <Container>
          {sidebar.map(({ id, title, path, icon }) => (
            <Wrapper>
              {<img src={icon} />}
              <NavLink key={id} to={path}>
                <Title>{title}</Title>
              </NavLink>
            </Wrapper>
          ))}
          <Border />
      </Container>
    );
}

export default Sidebar
