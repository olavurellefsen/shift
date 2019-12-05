import styled from "styled-components";

export const ScenarioList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ScenarioDivider = styled.div`
  height: 5px;
`;

export const ScenarioHeader = styled.div`
  font-size: ${props => (props.narrowVersion ? "0.9em" : "1em")};
  padding: ${props => (props.narrowVersion ? "5px" : "0 12px 0 15px")};
  margin: 0px 0px 5px 0px;
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
`;

export const ScenarioOption = styled.div`
  justify-content: space-between;
  width: 100%;
  font-size: ${props => (props.narrowVersion ? "0.7em" : "0.9em")};
  display: flex;
  align-items: center;
  height: ${props => (props.narrowVersion ? "12px" : "26px")};
  padding: ${props => (props.narrowVersion ? "5px" : "0 12px 0 15px")};
  position: relative;
  width: 100%;
  border-radius: 0;
  background-color: ${props =>
    props.selected ? "#b50404" : props.selected2 ? "green" : "inherit"};
  color: ${props =>
    props.selected ? "white" : props.selected2 ? "white" : "rgb(184,176,183)"};
  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.selected ? "#b50404" : props.selected2 ? "green" : "#555"};
    > * {
      font-weight: ${props =>
        props.selected ? "bold" : props.selected2 ? "bold" : "normal"};
    }
  }
`;
export const ScenarioNameContainer = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 5px;
  &:hover {
    cursor: ${props =>
    props.available ? "pointer" :  "default"};
    color: ${props =>
    props.available ? "black" :  "default"};;
  }
  color: ${props =>
    props.selected ? "blue" :  "rgb(184,176,183)"};
`;

export const MenuSeparatorLine = styled.hr`
  margin: 0.25em 12px 0.25em 15px;
  border-color: #555;
  border-width: 1px;
  width: 100%;
`;