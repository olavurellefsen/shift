import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { Link } from "react-router-dom";
import ScenarioSelectionList from "../scenarioSelection/ScenarioSelectionList";
import ToggleSwitch from "./ToggleSwitch";
import { useTranslation } from "react-i18next";

import {MenuLayout, 
  MenuHeader, 
  MenuHeaderLeft, 
  MenuItem, 
  MenuRoutes, 
  AppLogo, 
  MenuSeparatorLine, 
  ScenarioSelection, 
  ToggleDifference, 
  ToggleSwitchText, 
  ScenarioDifferenceText, 
  MenuFooter,
  CopyrightNotice,
  ExternalLink,
  PartnerLogo} from './LeftMenu.mobile.style'

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
        <AppLogo src="./images/shift_logo.png" alt="logo" />
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
            selectedValue={props.scenarioSelection.scenarioSelectionNoOptions}
            selectedValue2={props.scenarioSelection.scenarioSelectionNoOptions2}
            dimensionOptions={props.scenarioCombinations.scenarioOptions}
            dimensionTitle={t("general.scenarios")}
            narrowVersion={true}
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
        <MenuFooter>
          <PartnerLogo src="./images/nordic_energy_research.png" alt="logo" />
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
