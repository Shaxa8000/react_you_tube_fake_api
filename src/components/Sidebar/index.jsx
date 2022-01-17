import React, {useContext} from 'react';
import { Container, Wrapper, Title, Border } from './style';
import { Side } from '../../context/sidebar';

const Sidebar = () => {
    const [mock, setMock] = useContext(Side);
    return (
      <Container>
        {mock.map(({id, title, icon}) => (
          <Wrapper>
            {<img src={icon} />}
            <Title>{title}</Title>
          </Wrapper>
        ))}
        <Border />
      </Container>
    );
}

export default Sidebar
