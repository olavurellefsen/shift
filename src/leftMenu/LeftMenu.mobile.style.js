import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { Link } from "react-router-dom";

export const MenuLayout = styled.div`
  display: none;
  ${breakpoint("mobile", "desktop")`
    display: flex;  
    min-height: 100vh;
    flex-direction: column;
    flex-shrink: 0;
    width: 80px;
    color: white;
    background: rgb(50, 50, 50);
    visibility: visible;
  `}
`;

export const AppLogo = styled.img`
  width: 70px;
  height: 30px;
  margin: 5px;
  border: 0;
`;

export const PartnerLogo = styled.img`
  width: 100px;
  height: 35px;
  margin-left: 5px;
  border: 0;
`;

export const MenuHeader = styled.div`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
`;

export const MenuSeparatorLine = styled.hr`
  margin: 0.25em 12px 0.25em 5px;
  border-color: #555;
  border-width: 1px;
  width: 100hh;
`;

export const MenuRoutes = styled.div`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuItem = styled(Link)`
  font-weight: ${props => (props.selected ? "bold" : "normal")};
  font-size: 0.7em;
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${props => (props.selected ? "yellow" : "inherit")};
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ScenarioSelection = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export const ToggleDifference = styled.div`
  padding: 5px;
  display: flex;
  justify-content: start;
  align-content: center;
  flex-direction: column;
`;

export const ToggleSwitchText = styled.div`
  font-size: 0.7em;
  color: ${props =>
    props.singleMode ? "gray" : props.selected ? "#2196F3" : "white"};
  margin-top: 5px;
`;

export const ToggleLanguageText = styled.div`
  font-size: 0.7em;
  color: ${props => (props.selected ? "white" : "gray")};
  margin-left: 3px;
  margin-right: 3px;
`;

export const ScenarioDifferenceText = styled.div`
  font-size: 0.7em;
  color: ${props =>
    props.singleMode ? "gray" : props.selected ? "#2196F3" : "white"};
  margin: 5px;
`;

export const MenuFooter = styled.div`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CopyrightNotice = styled.div`
  font-size: 0.7em;
  padding: 5px;
  margin: 0;
  width: 100%;
`;

export const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
