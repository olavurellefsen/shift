import React from 'react'
import PropTypes from 'prop-types'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChart'
import StackedBarDiffChart from './StackedBarDiffChart'
import { MainArea, Flex } from './Charts.style'
import stackedBar from '../data/stackedBar'
import line from '../data/line'

const Charts = props => {
  const selectedScenario = props.scenarioSelection.scenarioSelection
  const selectedScenario2 = props.scenarioSelection.scenarioSelection2
  const selectedCountries = props.selectedCountries
  const options = props.scenarioSelection.options

  return (
    <MainArea>
      {props.scenarioSelection.showWelcome === true && (
        <Welcome closeWelcome={props.closeWelcome} />
      )}
      {(props.scenarioSelection.showDifference === false ||
        (props.scenarioSelection.showDifference === true &&
          selectedScenario2 === '')) && (
        <Flex>
          <StackedBarChart
            chartName="_CO2 Emissions"
            chartTitle="CO2 Emissions"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="kt"
            minY={-60000}
            maxY={180000}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Captured CO2"
            chartTitle="Captured CO2"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="kt"
            minY={0}
            maxY={60000}
            options={options}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Biomass Primary Supply"
            chartTitle="Biomass Primary Supply"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={1500}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Elproduktion"
            chartTitle="Power Production"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={1000}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Power Trade"
            chartTitle="Power Trade"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={-200}
            maxY={400}
            stackedBar={stackedBar}
            line={line}
          />		  
          <StackedBarChart
            chartName="_District heating production"
            chartTitle="District Heating Supply"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={400}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Husholdningers varmeforbrug"
            chartTitle="Households Fuel Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={400}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Industrial energy demand"
            chartTitle="Industry fuel consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={1000}
            stackedBar={stackedBar}
            line={line}
          />
		    <StackedBarChart
            chartName="_Transport sektorens energifor"
            chartTitle="Transport Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={600}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Systemomkostninger"
            chartTitle="System Costs"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="M Euro"
            minY={-4077}
            maxY={50000}
			stackedBar={stackedBar}
			line={line}
          />
        </Flex>
      )}
      {props.scenarioSelection.showDifference === true &&
        selectedScenario2 !== '' && (
        <Flex>
		  <StackedBarDiffChart
            chartName="_CO2 Emissions"
            chartTitle="CO2 Emissions"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="kt"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarDiffChart
            chartName="_Captured CO2"
            chartTitle="Captured CO2"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="kt"
            minY={-1}
            maxY={1}
            options={options}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarDiffChart
            chartName="_Biomass Primary Supply"
            chartTitle="Biomass Primary Supply"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />		  
          <StackedBarDiffChart
            chartName="_Elproduktion"
            chartTitle="Power Production"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarDiffChart
            chartName="_Power Trade"
            chartTitle="Power Trade"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarDiffChart
            chartName="_District heating production"
            chartTitle="District Heating Supply"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarDiffChart
            chartName="_Husholdningers varmeforbrug"
            chartTitle="Households Fuel Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarDiffChart
            chartName="_Industrial energy demand"
            chartTitle="Industry fuel consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
		    <StackedBarDiffChart
            chartName="_Transport sektorens energifor"
            chartTitle="Transport Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarDiffChart
            chartName="_Systemomkostninger"
            chartTitle="System Costs"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="M Euro"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
          </Flex>
        )}
    </MainArea>
  )
}

Charts.propTypes = {
  scenarioSelection: PropTypes.object.isRequired,
  closeWelcome: PropTypes.func.isRequired,
  selectedCountries: PropTypes.array.isRequired,
}

export default Charts
