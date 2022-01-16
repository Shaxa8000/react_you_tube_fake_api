import React, {useContext, useState} from 'react';
import { Container, Card, Img, Title, Category, Views } from './style';
import { Kino } from '../../context/movieList';

const Banner = () => {
    const [kino, setKino] = useContext(Kino)
    return (
        <Container>
            {
                kino.map((value) => (
                    <Card>
                        <Img src={value.url} />
                        <Title>{value.name}</Title>
                        <Category>{value.catagory}</Category>
                        <Views>{value.views} views {value.time}</Views>
                    </Card>
                ))
            }
        </Container>
    )
}

export default Banner
