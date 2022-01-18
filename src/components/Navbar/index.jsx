import React, {useContext, useState} from 'react';
import { Container, Logo, Community, InputWrap, Input, Btn, SearchIcon, LeftWrap, LeftIcon, LeftSecond, LeftThird, Bg } from './style';
import { Kino } from '../../context/movieList';
import { moviel } from '../../Mock/movie';



const Navbar = () => {
    const [kino, setKino] = useContext(Kino);
    const [title, setTitle] = useState('');


    const getSearch = (e) => {
        const newData = moviel.filter((value) => value.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setKino(newData)


        if (e.target.value === '') {
            setKino(moviel)
        }
}

    return (
        <Container>
            <Community/>
            <Logo />
            <InputWrap>
                <Input onChange={getSearch} type="text" placeholder="Search" />
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
