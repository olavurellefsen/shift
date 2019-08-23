import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  ScenarioList,
  ScenarioDivider,
  ScenarioHeader,
  ScenarioOption,
  MenuSeparatorLine,
  IconContainer,
  Icon,
  ScenarioNameContainer
} from "./ScenarioSelectionList.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faDatabase, faBolt, faBatteryFull} from '@fortawesome/free-solid-svg-icons'

function cancelBubble(e){
  //Stop propagation to the underlying div
  //(used to prevent onclick for scenario being fired when clicking on an option)
  e.cancelBubble = true;
  if(e.stopPropagation)
   e.stopPropagation();
}

const ScenarioSelectionList = props => {
  const { t } = useTranslation();
  const handleChange = (event, value) => {
    props.updateScenarioSelection(event, props.name, value);
  };
  const scenarioSwitches = props.options;
  const { dimensionOptions, dimensionTitle, narrowVersion } = props;
  let stringValue = props.selectedValue.toString();
  let stringValue2 = props.selectedValue2.toString();
  let scenarioOptions = dimensionOptions
    .filter( s => !s.ccs && !s.opt1 && !s.opt2 && !s.opt3)
    .map(option => {
      let optionValue = option.nameNoOptions;
      if (optionValue === "division_line") {
        return <MenuSeparatorLine key={option.id} />;
      } else {
        return (
          <ScenarioOption
            key={option.id}
            value={optionValue}
            selected={optionValue === stringValue}
            selected2={optionValue === stringValue2}
            narrowVersion={narrowVersion}
            onClick={event => {handleChange(event, optionValue)}}
          >
            <ScenarioNameContainer
            >
              {narrowVersion === false && t("scenario."+option.short_description)}
              {narrowVersion === true && t("scenario."+option.ultra_short_description)}
            </ScenarioNameContainer>
            <IconContainer>
              <Icon 
                onClick={event => {
                  props.toggleOption(optionValue, 'ccs');
                  cancelBubble(event)//prevent onclick for scenario being fired
                }} 
                selected={scenarioSwitches[optionValue].ccs}
              >
                <FontAwesomeIcon icon={faDatabase}/>
              </Icon>
              <Icon 
                onClick={event => {
                  props.toggleOption(optionValue, 'opt1');
                  cancelBubble(event)//prevent onclick for scenario being fired
                }} 
                 selected={scenarioSwitches[optionValue].opt1}>
                <FontAwesomeIcon icon={faLeaf}/>
              </Icon>
              <Icon 
                onClick={event => {
                  props.toggleOption(optionValue, 'opt2');
                  cancelBubble(event)//prevent onclick for scenario being fired
                }} 
                selected={scenarioSwitches[optionValue].opt2}>
                <FontAwesomeIcon icon={faBolt}/>
              </Icon>
              <Icon 
                onClick={event => {
                  props.toggleOption(optionValue, 'opt3');
                  cancelBubble(event)//prevent onclick for scenario being fired
                }} 
                selected={scenarioSwitches[optionValue].opt3}>
                <FontAwesomeIcon icon={faBatteryFull}/>
              </Icon>
            </IconContainer>
          </ScenarioOption>
        );
      }
    });
  return (
    <ScenarioList>
      <ScenarioDivider />
      <ScenarioHeader narrowVersion={narrowVersion}>
        {dimensionTitle}
      </ScenarioHeader>
      {scenarioOptions}
    </ScenarioList>
  );
};

ScenarioSelectionList.propTypes = {
  updateScenarioSelection: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.any.isRequired,
  selectedValue2: PropTypes.any.isRequired,
  dimensionOptions: PropTypes.array.isRequired,
  dimensionTitle: PropTypes.string.isRequired,
  narrowVersion: PropTypes.bool.isRequired,
  options: PropTypes.any.isRequired,
  toggleOption: PropTypes.func.isRequired
};

export default ScenarioSelectionList;
