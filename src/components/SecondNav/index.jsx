import React, {useContext} from 'react';
import { Container, Button } from './style';
import { Nav } from '../../context/navbar';


const SecondNav = () => {
    const [state, setState] = useContext(Nav)
    // console.log(state)
    return (
        <Container>
            {
                state.map(value => (
                    <div>
                        <Button>
                            {value}
                        </Button>
                    </div>
                ))
            }
        </Container>
    )
}

export default SecondNav
