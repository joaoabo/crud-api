import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #172E12; 
  box-shadow: 0 0 20px 3px;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
export const LogoImg = styled.div`
  color: white;
  width: 55%;
  height: 100px;
  background-color: transparent;
  direction: rtl;
`;
export const Img = styled.img`
  width: 189px;
  height: 95px;
  margin-top: 2px;
  border-radius: 10px;
`;