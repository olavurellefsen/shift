import React from "react";
import PropTypes from "prop-types";
import ScenarioSelectionList from "../scenarioSelection/ScenarioSelectionList";
import ToggleSwitch from "./ToggleSwitch";
import { useTranslation } from "react-i18next";
import MapContainer from '../map/MapContainer'
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
  PartnerLogo} from './LeftMenu.style'

function ScenarioSelectionMenu(props) {
  const { t } = useTranslation();

  return (
    <MenuLayout>
      <MenuHeader>
        <MenuHeaderLeft>
          
        <AppLogo src="./images/shift_logo_white.png" alt="logo" />
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
      <MapContainer selectedCountries={props.selectedCountries} selectCountry={props.selectCountry}/>
      <MenuSeparatorLine />
      <MenuFooter>      
        <PartnerLogo src="./images/nordic_energy_research_cropped.png" alt="logo" />
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
  toggleShowOpt3: PropTypes.func.isRequired,
  selectedCountries: PropTypes.array.isRequired,
  selectCountry: PropTypes.func.isRequired
};

export default ScenarioSelectionMenu;
