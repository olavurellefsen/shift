import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Octicon from "react-octicon";
import { useTranslation } from "react-i18next";

const AlertContainer = styled.div`
  padding: 10px;
  margin-bottom: 30px;
  border-width: 1px;
  border-color: blue;
  border-style: solid;
  background-color: mintcream;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  flex-direction: row;
`;
AlertContainer.displayName = "AlertContainer";
const AlertBody = styled.div`
  font-size: 1em;
  margin: 0px;
  align-self: center;
  flex: 1;
`;
AlertBody.displayName = "AlertBody";
const AlertBodyParagraph = styled.p``;
AlertBodyParagraph.displayName = "AlertBodyParagraph";
const CloseWindowIcon = styled.div`
  margin: 0px;
  border: 0;
  flex-shrink: 0;
  align-self: flex-start;
  :hover {
    cursor: pointer;
  }
`;
CloseWindowIcon.displayName = "CloseWindowIcon";

function Welcome(props) {
  const { t } = useTranslation();
  return (
    <AlertContainer>
      <AlertBody>
        <AlertBodyParagraph>{t("welcome-text.welcome-1")}</AlertBodyParagraph>
		<AlertBodyParagraph>{t("welcome-text.welcome-2")}</AlertBodyParagraph>
		<AlertBodyParagraph>{t("welcome-text.welcome-3")}</AlertBodyParagraph>
		<AlertBodyParagraph>{t("welcome-text.welcome-4")}</AlertBodyParagraph>
      </AlertBody>
      <CloseWindowIcon
        onClick={event => props.closeWelcome(event, "showWelcome", false)}
      >
        <Octicon name="x" />
      </CloseWindowIcon>
    </AlertContainer>
  );
}

Welcome.propTypes = {
  closeWelcome: PropTypes.func.isRequired
};

export default Welcome;
