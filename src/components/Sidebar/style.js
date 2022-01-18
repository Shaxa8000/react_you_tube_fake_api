import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  background: #212121;
  position: fixed;
  margin-top: 70px;
`;

export const Wrapper = styled.div`
  padding: 10px 28px;
  display: flex;
  align-items: center;
  transition: all 1s;
//   margin-right: 50px;
  :hover {
    background: #09090a;
  }
`;

export const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-left: 28px;
  color: #ffffff;
`;

export const Border = styled.div`
  width: 240px;
  height: 2px;
  color: white;
`;
