import React from 'react';
import { Container, Logo, Community, InputWrap, Input, Btn, SearchIcon, LeftWrap, LeftIcon, LeftSecond, LeftThird, Bg } from './style';


const Navbar = () => {
    return (
        <Container>
            <Community/>
            <Logo />
            <InputWrap>
                <Input type="text" placeholder="Search" />
                <Btn>
                   <SearchIcon/>
                </Btn>
            </InputWrap>
            <LeftWrap>
                <LeftIcon />
                <LeftSecond />
                <LeftThird />
                <Bg/>
            </LeftWrap>
        </Container>
    )
}

export default Navbar
