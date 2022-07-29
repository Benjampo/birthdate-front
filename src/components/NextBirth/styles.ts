import  styled from 'styled-components';
import img from './../../assets/images/birthdayBG.png';


export const HeaderBirth = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BirthContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
