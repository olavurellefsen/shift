import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { Link } from "react-router-dom";
import ScenarioSelectionList from "../scenarioSelection/ScenarioSelectionList";
import ToggleSwitch from "./ToggleSwitch";
import { useTranslation } from "react-i18next";
import MapContainer from "../map/MapContainer";

const MenuLayout = styled.div`
  display: none;
  ${breakpoint("desktop")`
    display: flex;
    flex-direction: column;
    width: 220px;
    color: white;
    background: rgb(50, 50, 50);
    visibility: visible;
    overflow: visible;
  `}
`;

const MenuHeader = styled.div`
  padding: 10px 12px 5px 10px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
`;

const AppLogo = styled.img`
  padding: 0px;
  max-width: 160px;
  border: 0;
  align-self: center;
`;

const MenuSeparatorLine = styled.hr`
  margin: 0.25em 12px 0.25em 15px;
  border-color: #555;
  border-width: 1px;
  width: 100hh;
`;

const MenuRoutes = styled.div`
  padding: 10px 12px 15px 5px;
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
  padding: 2px 0;
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
  padding: 5px 15px;
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
  margin-bottom: 5px;
`;

const MenuFooter = styled.div`
  padding: 10px 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CopyrightNotice = styled.div`
  padding: 20px 12px 5px 15px;
  margin: 10px 0 0 0;
  height: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CopyrightItem = styled.div`
  align-self: center;
  padding: 5px 0;
  text-align: center;
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const Header = styled.h1`
  font-size: ${props => (props.narrowVersion ? "0.9em" : "1em")};
  padding: ${props => (props.narrowVersion ? "5px" : "0 12px 0 15px")};
  margin: 0;
  height: 26px;
  align-self: center;
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
        <ExternalLink href="http://www.nordicenergy.org/flagship/project-shift/">
          <AppLogo src="./images/shift_logo_white.png" alt="logo" />
        </ExternalLink>
        <MenuRoutes>
          <MenuItem
            to="/about"
            selected={props.selectedChartgroup === "/about"}
          >
            {t("menu.desktop.about")}
          </MenuItem>
          <MenuItem
            to="/scenarios"
            selected={props.selectedChartgroup === "/scenarios"}
          >
            {t("menu.desktop.scenarios")}
          </MenuItem>
          <MenuItem
            to="/findings"
            selected={props.selectedChartgroup === "/findings"}
          >
            {t("menu.desktop.findings")}
          </MenuItem>
          <MenuItem
            to="/subscribe"
            selected={props.selectedChartgroup === "/subscribe"}
          >
            {t("menu.desktop.subscribe")}
          </MenuItem>
        </MenuRoutes>
      </MenuHeader>
      <MenuSeparatorLine />
      <Header narrowVersion={false}>{t("general.countries")}</Header>
      <MapContainer
        selectedCountries={props.selectedCountries}
        selectCountry={props.selectCountry}
      />
      <MenuSeparatorLine />
      <ScenarioSelection>
        <ScenarioSelectionList
          updateScenarioSelection={props.updateScenarioSelection}
          name="scenarioSelection"
          selectedValue={props.scenarioSelection.scenarioSelectionNoOptions}
          selectedValue2={props.scenarioSelection.scenarioSelectionNoOptions2}
          scenarioCombinations={props.scenarioCombinations}
          dimensionTitle={t("general.scenarios")}
          narrowVersion={false}
          options={props.options}
          toggleOption={props.toggleOption}
        />
      </ScenarioSelection>
      <MenuSeparatorLine />
      <ToggleDifference
        onClick={e => {
          if (props.scenarioSelection.scenarioSelection2 !== "") {
            props.toggleDifference(e);
          }
        }}
      >
        <ToggleSwitch
          available={props.scenarioSelection.scenarioSelection2 !== ""}
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
        {t("general.red-minus-green")}
      </ScenarioDifferenceText>
      <MenuSeparatorLine />
      <MenuFooter>
        <ExternalLink href="https://www.nordicenergy.org">
          <AppLogo
            src="./images/nordic_energy_research_cropped.png"
            alt="Nordic Energy Research"
          />
        </ExternalLink>
        <CopyrightNotice>
          <Header> {t("general.developed-by")}</Header>
          <CopyrightItem>
            <ExternalLink href="http://www.tokni.com">
              <AppLogo src="./images/tokni.png" alt="Tøkni" data-tip="Tøkni - Nordic Software Consultancy"/>
            </ExternalLink>
          </CopyrightItem>
          <CopyrightItem>
            <ExternalLink href="https://energymodelling.club/">
              <AppLogo src="./images/emc.png" alt="Energy Modelling Club" maxWidth="75px" data-tip="Energy Modelling Club"/>
            </ExternalLink>
            <ExternalLink href="https://energymodellinglab.com/">
              <AppLogo src="./images/eml.png" alt="Energy Modelling Lab" maxWidth="75px" data-tip="Energy Modelling Lab"/>
            </ExternalLink>
          </CopyrightItem>
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
  options: PropTypes.any.isRequired,
  toggleOption: PropTypes.func.isRequired,
  selectedCountries: PropTypes.array.isRequired,
  selectCountry: PropTypes.func.isRequired
};

export default ScenarioSelectionMenu;
