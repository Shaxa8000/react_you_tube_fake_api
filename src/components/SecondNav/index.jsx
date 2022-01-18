import React, {useContext, useState} from 'react';
import { Container, Button } from './style';
import { Nav } from '../../context/navbar';


const SecondNav = () => {


    const [state, setState] = useContext(Nav)
    return (
        <Container>
            {
                state.map(value => (
                    <div>
                        < Button>
                            {value}
                        </Button>
                    </div>
                ))
            }
        </Container>
    )
}

export default SecondNav
