import styled from "styled-components";

export const MainArea = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: ${props => (props.direction === "column" ? "column" : "row")};
`;