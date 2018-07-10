import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.div`
  padding: 0.5rem;
  width: 100%;
  background-color: #9dc217;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
`;

export const SubNav = styled.div`
  height: 67px;
  border-bottom: 1px solid #dbdbdb;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.primaryColor};
  border: 1px solid transparent;
  width: 170px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  padding: 0.5rem 2.5rem;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  :focus {
    outline: 0;
  }
  :hover {
    color: ${props => props.theme.primaryColor};
    background-color: white;
    border-color: ${props => props.theme.primaryColor};
  }
`;

export const SideNav = styled.div`
  width: 230px;
  min-width: 230px;
  height: 100vh;
  overflow-x: hidden;
  border-right: solid #dbdbdb 1px;
`;

export const SideNavLink = styled(Link)`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 15px;
  display: block;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: fill-available;
`;

export const Content = styled.div`
  display: flex;
  padding: 1rem;
`;
