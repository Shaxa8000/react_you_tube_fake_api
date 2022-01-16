import styled from 'styled-components';





export const Container = styled.div`
  height: 56px;
  width: 100%;
  background: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 70px;
  position: fixed;
  margin-left: 240px;
  padding-right: 240px;
`;

export const Button = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ffffff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #000000;
  width: 122px;
  height: 33px;
  margin: 0px 10.4px;
  transition: all 1s;
  :hover{
      background: grey;
      color: #fff;
  }
`;