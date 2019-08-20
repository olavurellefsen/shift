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
  ${breakpoint("desktop")`
    display: flex;  
    min-height: 100vh;
    flex-direction: column;
    flex-shrink: 0;
    width: 220px;
    color: white;
    background: rgb(50, 50, 50);
    visibility: visible;
  `}
`;

const MenuHeader = styled.div`
  padding: 10px 12px 5px 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
`;

const MenuHeaderLeft = styled.div`
  padding: 0 12px 5px 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const MenuHeaderRight = styled.div`
  padding: 0 12px 5px 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: right;
`;

const AppLogo = styled.img`
  width: 45px;
  height: 67px;
  margin-left: 5px;
  border: 0;
`;

const MenuTitle = styled(Link)`
  font-weight: bold;
  font-size: 1.25em;
  padding: 0px 0px 5px 15px;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
`;

const MenuSeparatorLine = styled.hr`
  margin: 0.25em 12px 0.25em 15px;
  border-color: #555;
  border-width: 1px;
  width: 100hh;
`;

const MenuRoutes = styled.div`
  padding: 10px 12px 15px 15px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled(Link)`
  font-weight: ${props => (props.selected ? "bold" : "normal")};
  font-size: 1em;
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  color: ${props => (props.selected ? "yellow" : "inherit")};
`;

const ScenarioSelection = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const ToggleDifference = styled.div`
  padding: 15px;
  display: flex;
  justify-content: start;
  align-content: center;
`;

const ToggleSwitchText = styled.div`
  color: ${props =>
    props.singleMode ? "gray" : props.selected ? "#2196F3" : "white"};
  margin-left: 10px;
`;

// const ToggleLanguageText = styled.div`
//   color: ${props => (props.selected ? "white" : "gray")};
//   margin-left: 10px;
//   margin-right: 10px;
// `;

const ScenarioDifferenceText = styled.div`
  font-size: 0.7em;
  color: ${props =>
    props.singleMode ? "gray" : props.selected ? "#2196F3" : "white"};
  margin-left: 60px;
  margin-bottom: 10px;
`;

const MenuFooter = styled.div`
  padding: 15px 12px 5px 15px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CopyrightNotice = styled.div`
  padding: 0 12px 5px 15px;
  margin: 0;
  width: 100%;
  height: 26px;
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

function ScenarioSelectionMenu(props) {
  const { t } = useTranslation();

  // const toggleLanguage = e => {
  //   e.preventDefault();
  //   if (language === "en") {
  //     i18n.changeLanguage("dk");
  //   } else {
  //     i18n.changeLanguage("en");
  //   }
  // };

  return (
    <MenuLayout>
      <MenuHeader>
        <MenuHeaderLeft>
          <MenuTitle to="/">{t("title")}</MenuTitle>
          <MenuRoutes>
            <MenuItem
              to="/about"
              selected={props.selectedChartgroup === "/about"}
            >
              {t("menu.desktop.about")}
            </MenuItem>
            <MenuItem
              to="/descriptions"
              selected={props.selectedChartgroup === "/descriptions"}
            >
              {t("menu.desktop.descriptions")}
            </MenuItem>
            <MenuItem
              to="/preconditions"
              selected={props.selectedChartgroup === "/preconditions"}
            >
              {t("menu.desktop.preconditions")}
            </MenuItem>
            <MenuItem
              to="/subscribe"
              selected={props.selectedChartgroup === "/subscribe"}
            >
              {t("menu.desktop.subscribe")}
            </MenuItem>
          </MenuRoutes>
        </MenuHeaderLeft>
        <MenuHeaderRight>
          <AppLogo src="./images/dtulogo_white.png" alt="logo" />
        </MenuHeaderRight>
      </MenuHeader>
      <MenuSeparatorLine />
      <ScenarioSelection>
        <ScenarioSelectionList
          updateScenarioSelection={props.updateScenarioSelection}
          name="scenarioSelection"
          selectedValue={props.scenarioSelection.scenarioSelectionNoOptions}
          selectedValue2={props.scenarioSelection.scenarioSelectionNoOptions2}
          dimensionOptions={props.scenarioCombinations.scenarioOptions}
          dimensionTitle={t("general.scenarios")}
          narrowVersion={false}
          showCCS={props.scenarioSelection.showCCS}
          showOpt1={props.scenarioSelection.showOpt1}
          showOpt2={props.scenarioSelection.showOpt2}
          showOpt3={props.scenarioSelection.showOpt3}
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
      <ToggleDifference onClick={e => props.toggleShowOpt1(e)}>
        <ToggleSwitch
          dimmed={false}
          checked={props.scenarioSelection.showOpt1}
        />
        <ToggleSwitchText selected={props.scenarioSelection.showOpt1}>
          {t("general.opt1")}
        </ToggleSwitchText>
      </ToggleDifference>
      <ToggleDifference onClick={e => props.toggleShowOpt2(e)}>
        <ToggleSwitch
          dimmed={false}
          checked={props.scenarioSelection.showOpt2}
        />
        <ToggleSwitchText selected={props.scenarioSelection.showOpt2}>
          {t("general.opt2")}
        </ToggleSwitchText>
      </ToggleDifference>
      <ToggleDifference onClick={e => props.toggleShowOpt3(e)}>
        <ToggleSwitch
          dimmed={false}
          checked={props.scenarioSelection.showOpt3}
        />
        <ToggleSwitchText selected={props.scenarioSelection.showOpt3}>
          {t("general.opt3")}
        </ToggleSwitchText>
      </ToggleDifference>
      <MenuSeparatorLine />
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
      {/* <MenuSeparatorLine />
      <ToggleDifference onClick={e => toggleLanguage(e)}>
        <ToggleLanguageText selected={language === "dk"}>
          Danish
        </ToggleLanguageText>
        <ToggleSwitch checked={language !== "dk"} dimmed={false} />
        <ToggleLanguageText selected={language === "en"}>
          English
        </ToggleLanguageText>
      </ToggleDifference> */}
      <MenuSeparatorLine />
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
  toggleShowCCS: PropTypes.func.isRequired,
  toggleShowOpt1: PropTypes.func.isRequired,
  toggleShowOpt2: PropTypes.func.isRequired,
  toggleShowOpt3: PropTypes.func.isRequired
};

export default ScenarioSelectionMenu;
