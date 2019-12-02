import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'react-router-dom'
import ScenarioSelectionList from '../scenarioSelection/ScenarioSelectionList'
import ToggleSwitch from './ToggleSwitch'
import { useTranslation } from 'react-i18next'
import MapContainer from '../map/MapContainer'

const MenuLayout = styled.div`
  display: none;
  ${breakpoint('desktop')`
    display: flex;  
    min-height: 100vh;
    flex-direction: column;
    flex-shrink: 0;
    width: 220px;
    color: white;
    background: rgb(50, 50, 50);
    visibility: visible;
  `}
`

const MenuHeader = styled.div`
  padding: 10px 12px 5px 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
`

const AppLogo = styled.img`
  padding-bottom: 20px;
  width: 200px;
  margin-left: 5px;
  border: 0;
`

const MenuSeparatorLine = styled.hr`
  margin: 0.25em 12px 0.25em 15px;
  border-color: #555;
  border-width: 1px;
  width: 100hh;
`

const MenuRoutes = styled.div`
  padding: 10px 12px 15px 15px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MenuItem = styled(Link)`
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
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
  color: ${props => (props.selected ? 'yellow' : 'inherit')};
`

const ScenarioSelection = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

const ToggleDifference = styled.div`
  padding: 15px;
  display: flex;
  justify-content: start;
  align-content: center;
`

const ToggleSwitchText = styled.div`
  color: ${props =>
    props.singleMode ? 'gray' : props.selected ? '#2196F3' : 'white'};
  margin-left: 10px;
`

// const ToggleLanguageText = styled.div`
//   color: ${props => (props.selected ? "white" : "gray")};
//   margin-left: 10px;
//   margin-right: 10px;
// `;

const ScenarioDifferenceText = styled.div`
  font-size: 0.7em;
  color: ${props =>
    props.singleMode ? 'gray' : props.selected ? '#2196F3' : 'white'};
  margin-left: 60px;
  margin-bottom: 10px;
`

const MenuFooter = styled.div`
  padding: 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CopyrightNotice = styled.div`
  padding: 20px 12px 5px 15px;
  margin: 0;
  height: 26px;
`

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

function ScenarioSelectionMenu(props) {
  const { t } = useTranslation()

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
        <AppLogo src="./images/shift_logo_white.png" alt="logo" />
        <MenuRoutes>
          <MenuItem
            to="/about"
            selected={props.selectedChartgroup === '/about'}
          >
            {t('menu.desktop.about')}
          </MenuItem>
          <MenuItem
            to="/scenarios"
            selected={props.selectedChartgroup === '/scenarios'}
          >
            {t('menu.desktop.scenarios')}
          </MenuItem>
          <MenuItem
            to="/findings"
            selected={props.selectedChartgroup === '/findings'}
          >
            {t('menu.desktop.findings')}
          </MenuItem>
          <MenuItem
            to="/subscribe"
            selected={props.selectedChartgroup === '/subscribe'}
          >
            {t('menu.desktop.subscribe')}
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
          scenarioCombinations={props.scenarioCombinations}
          dimensionTitle={t('general.scenarios')}
          narrowVersion={false}
          options={props.options}
          toggleOption={props.toggleOption}
        />
      </ScenarioSelection>
      <MenuSeparatorLine />
      <ToggleDifference onClick={e => 
      { if (props.scenarioSelection.scenarioSelection2 !== '') {
        props.toggleDifference(e)
      }
      }
      }>
        <ToggleSwitch
          available={props.scenarioSelection.scenarioSelection2 !== ''}
          checked={props.scenarioSelection.showDifference}
        />
        <ToggleSwitchText
          singleMode={props.scenarioSelection.scenarioSelection2 === ''}
          selected={props.scenarioSelection.showDifference}
        >
          {t('general.scenario-difference')}
        </ToggleSwitchText>
      </ToggleDifference>
      <ScenarioDifferenceText
        singleMode={props.scenarioSelection.scenarioSelection2 === ''}
        selected={props.scenarioSelection.showDifference}
      >
        {t('general.green-minus-red')}
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
      <MapContainer
        selectedCountries={props.selectedCountries}
        selectCountry={props.selectCountry}
      />
      <MenuSeparatorLine />
      <MenuFooter>
        <AppLogo src="./images/nordic_energy_research_cropped.png" alt="Nordic Energy Research" />
        <CopyrightNotice>
          <ExternalLink href="http://www.tokni.com">
            {t('general.developed-by-Tokni')}
          </ExternalLink>
        </CopyrightNotice>
      </MenuFooter>
    </MenuLayout>
  )
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
  selectCountry: PropTypes.func.isRequired,
}

export default ScenarioSelectionMenu
