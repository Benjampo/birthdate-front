import  styled from 'styled-components';
import {Link} from "react-router-dom";

export const CardItem = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.colors.accentColor};
  list-style: none;
  background-color: ${props => props.theme.colors.white};
  padding: 1em;
  border-radius: 1em;
  justify-content: space-around;
  margin: 0.5em;
`;
export const ItemDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  width: 2em;
  background: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.white};
  border-radius: 50%;
  height: 2em;
`;
export const ItemDateDay = styled.span`

`;
export const ItemDateMonth = styled.span`

`;

export const ItemName = styled.div`

`;
export const ItemNameTitle = styled.h2`

`;
export const ItemNameAge = styled.h2`

`;

