import styled from 'styled-components';
import Image from '../../assets/images/bg1.jpg';


export const Container = styled.div`
//   background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 250px;
  padding-top: 25px;
  box-sizing: border-box;
  margin-top: 110px;
`;


export const Img = styled.div`
width: 1105px;
height: 510px;
background-image: url(${Image})
`


export const Title = styled.div`
font-size: 30px;
font-weight: 800;
font-family: Arial;
color: #fff;
`


