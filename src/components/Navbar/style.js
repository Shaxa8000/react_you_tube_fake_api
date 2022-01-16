import styled from 'styled-components';
import { ReactComponent as Logos } from '../../assets/icons/Logo.svg';
import { ReactComponent as Home } from '../../assets/icons/community.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Camera } from '../../assets/icons/camera.svg';
import { ReactComponent as AfterCam } from '../../assets/icons/aftercam.svg';
import { ReactComponent as bell } from '../../assets/icons/bell.svg';
import Img from '../../assets/images/bg.png';


export const Container = styled.div`
width: 100%;
height: 70px;
background: #212121;
display: flex;
align-items: center;
position: fixed;
`;





export const Logo = styled(Logos)`
`

export const Community = styled(Home)`
margin: 0px 27px;
`

export const InputWrap = styled.div`
display: flex;
align-items: center;
margin-left: 200px;
`

export const Input = styled.input`
width: 574px;
height: 35px;
color:#ccc;
outline: none;
font-size: 20px;
background: #000000;
border: 1px solid rgba(255, 255, 255, 0.2);
box-sizing: border-box;
border-radius: 2px 0px 0px 2px;
font-family: Arial;
`


export const Btn = styled.button`
  width: 65px;
  height: 35px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 2px 2px 0px;
  outline: none;
  border: none;
  transition: all 1s;
  :hover {
      background: grey;
  }

`;


export const SearchIcon = styled(Search)`
`

export const LeftWrap = styled.div`
  margin-left: auto;
  margin-right: 30px;
  display: flex;
  column-gap: 30px;
  align-items: center;
`;
export const LeftIcon = styled(Camera)`
`;

export const LeftSecond = styled(AfterCam)`
`;

export const LeftThird = styled(bell)`
`;

export const Bg = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${Img});
  border-radius: 32px;
`;


