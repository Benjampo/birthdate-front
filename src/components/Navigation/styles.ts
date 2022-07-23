import  styled from 'styled-components';
import {Link} from "react-router-dom";

export const NavigationBar = styled.footer`
  background-color: ${props => props.theme.colors.accentColor};
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  border: none;
  display: block;
  width: 100%;
  padding: 2vh 3vw;
  font-size: 20px; 
`;
export const NavItem = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
`;
