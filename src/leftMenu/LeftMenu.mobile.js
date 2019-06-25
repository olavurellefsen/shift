import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { Link } from "react-router-dom";
import ScenarioSelectionList from "../scenarioSelection/ScenarioSelectionList";
import ToggleSwitch from "./ToggleSwitch";
import { useTranslation } from "react-i18next";

const MenuLayout = styled.div`
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

const AppLogo = styled.img`
  width: 45px;
  height: 67px;
  margin: 5px;
  border: 0;
`;

const MenuHeader = styled.div`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
`;

const MenuSeparatorLine = styled.hr`
  margin: 0.25em 12px 0.25em 5px;
  border-color: #555;
  border-width: 1px;
  width: 100hh;
`;

const MenuRoutes = styled.div`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled(Link)`
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

const ScenarioSelection = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const ToggleDifference = styled.div`
  padding: 5px;
  display: flex;
  justify-content: start;
  align-content: center;
  flex-direction: column;
`;

const ToggleSwitchText = styled.div`
  font-size: 0.7em;
  color: ${props =>
    props.singleMode ? "gray" : props.selected ? "#2196F3" : "white"};
  margin-top: 5px;
`;

const ToggleLanguageText = styled.div`
  font-size: 0.7em;
  color: ${props => (props.selected ? "white" : "gray")};
  margin-left: 3px;
  margin-right: 3px;
`;

const ScenarioDifferenceText = styled.div`
  font-size: 0.7em;
  color: ${props =>
    props.singleMode ? "gray" : props.selected ? "#2196F3" : "white"};
  margin: 5px;
`;

const MenuFooter = styled.div`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CopyrightNotice = styled.div`
  font-size: 0.7em;
  padding: 5px;
  margin: 0;
  width: 100%;
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

function ScenarioSelectionMenu(props) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const toggleLanguage = e => {
    e.preventDefault();
    if (language === "en") {
      i18n.changeLanguage("dk");
    } else {
      i18n.changeLanguage("en");
    }
  };

    return (
      <MenuLayout>
        <MenuHeader>
          <AppLogo src="./images/dtulogo_white.png" alt="logo" />
          <MenuRoutes>
            <MenuItem
              to="/about"
              selected={props.selectedChartgroup === "/about"}
            >
              {t("menu.mobile.about")}
            </MenuItem>
            <MenuItem
              to="/descriptions"
              selected={props.selectedChartgroup === "/descriptions"}
            >
              {t("menu.mobile.descriptions")}
            </MenuItem>
            <MenuItem
              to="/preconditions"
              selected={props.selectedChartgroup === "/preconditions"}
            >
              {t("menu.mobile.preconditions")}
            </MenuItem>
            <MenuItem
              to="/subscribe"
              selected={props.selectedChartgroup === "/subscribe"}
            >
              {t("menu.mobile.subscribe")}
            </MenuItem>
          </MenuRoutes>
        </MenuHeader>
        <MenuSeparatorLine />
        <ScenarioSelection>
          <ScenarioSelectionList
            updateScenarioSelection={props.updateScenarioSelection}
            name="scenarioSelection"
            selectedValue={props.scenarioSelection.scenarioSelection}
            selectedValue2={props.scenarioSelection.scenarioSelection2}
            dimensionOptions={props.scenarioCombinations.scenarioOptions}
            dimensionTitle={t("general.scenarios")}
            narrowVersion={true}
            showCCS={props.scenarioSelection.showCCS}
          />
        </ScenarioSelection>
        <MenuSeparatorLine />
        <ToggleDifference onClick={e => props.toggleShowCCS(e)}>
          <ToggleSwitch
            dimmed={false}
            checked={props.scenarioSelection.showCCS}
          />
          <ToggleSwitchText selected={props.scenarioSelection.showCCS}>
            {t("general.CCS")}
          </ToggleSwitchText>
        </ToggleDifference>
        <ToggleDifference onClick={e => props.toggleDifference(e)}>
          <ToggleSwitch
            dimmed={props.scenarioSelection.scenarioSelection2 === ""}
            checked={props.scenarioSelection.showDifference}
          />
          <ToggleSwitchText
            singleMode={props.scenarioSelection.scenarioSelection2 === ""}
            selected={props.scenarioSelection.showDifference}
          >
            {t("general.scenario-difference")}
          </ToggleSwitchText>
        </ToggleDifference>
        <ScenarioDifferenceText
          singleMode={props.scenarioSelection.scenarioSelection2 === ""}
          selected={props.scenarioSelection.showDifference}
        >
          {t("general.green-minus-red")}
        </ScenarioDifferenceText>
        <MenuSeparatorLine />
        <ToggleDifference onClick={e => toggleLanguage(e)}>
        <ToggleLanguageText selected={language === "dk"}>
          Danish
        </ToggleLanguageText>
        <ToggleSwitch checked={language !== "dk"} dimmed={false} />
        <ToggleLanguageText selected={language === "en"}>
          English
        </ToggleLanguageText>
      </ToggleDifference>
        <MenuFooter>
          <CopyrightNotice>
            <ExternalLink href="http://www.tokni.com">
              {t("general.developed-by-Tokni")}
            </ExternalLink>
          </CopyrightNotice>
        </MenuFooter>
      </MenuLayout>
    );
  }


ScenarioSelectionMenu.propTypes = {
  selectedChartgroup: PropTypes.string.isRequired,
  updateScenarioSelection: PropTypes.func.isRequired,
  scenarioSelection: PropTypes.object.isRequired,
  scenarioCombinations: PropTypes.object.isRequired,
  toggleDifference: PropTypes.func.isRequired,
  toggleShowCCS: PropTypes.func.isRequired
};

export default ScenarioSelectionMenu;
