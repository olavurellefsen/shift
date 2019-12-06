import React from 'react'
import PropTypes from 'prop-types'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChart'
import StackedBarDiffChart from './StackedBarDiffChart'
import { MainArea, Flex } from './Charts.style'
import stackedBar from '../data/stackedBarTab2'
import line from '../data/lineTab2'

const Charts = props => {
  const selectedScenario = props.scenarioSelection.scenarioSelection
  const selectedScenario2 = props.scenarioSelection.scenarioSelection2
  const selectedCountries = props.selectedCountries

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
            chartName="_CO2 emissions in Transport"
            chartTitle="CO2 Emissions in Transport"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="kt"
            minY={0}
            maxY={14493}
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
            maxY={119}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport Inland Consumption"
            chartTitle="Transport Inland Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={108}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_BIo_Electro-fuels Consumption"
            chartTitle="Bio_Electro-fuels Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={55}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport Passenger Demand"
            chartTitle="Transport Pass Demand"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="Mpkm"
            minY={0}
            maxY={72260}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport Passenger Consumpti"
            chartTitle="Transport Passenger Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={90}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Car Stock"
            chartTitle="Car Stock"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="k vehicles"
            minY={0}
            maxY={4203}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport Cars Consumption"
            chartTitle="Transport Cars Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={90}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport Aviation Consumptio"
            chartTitle="Transport Aviation Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={65}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport freight demand"
            chartTitle="Transport Freight Demand"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="Mtkm"
            minY={0}
            maxY={316751}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport Freight Consumption"
            chartTitle="Transport Freight Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={63}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport Navigation Consumpt"
            chartTitle="Transport Navigation Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={48}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Truck Stock"
            chartTitle="Truck Stock"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="k vehicles"
            minY={0}
            maxY={79}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport Trucks Consumption"
            chartTitle="Transport Trucks Consumption"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={46}
            stackedBar={stackedBar}
            line={line}
          />
        </Flex>
      )}
      {props.scenarioSelection.showDifference === true &&
        selectedScenario2 !== '' && (
          <Flex>
          <StackedBarDiffChart
            chartName="_CO2 emissions in Transport"
            chartTitle="CO2 Emissions in Transport"
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
            chartName="_Transport Inland Consumption"
            chartTitle="Transport Inland Consumption"
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
            chartName="_BIo_Electro-fuels Consumption"
            chartTitle="Bio_Electro-fuels Consumption"
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
            chartName="_Transport Passenger Demand"
            chartTitle="Transport Pass Demand"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="Mpkm"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarDiffChart
            chartName="_Transport Passenger Consumpti"
            chartTitle="Transport Passenger Consumption"
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
            chartName="_Car Stock"
            chartTitle="Car Stock"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="k vehicles"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarDiffChart
            chartName="_Transport Cars Consumption"
            chartTitle="Transport Cars Consumption"
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
            chartName="_Transport Aviation Consumptio"
            chartTitle="Transport Aviation Consumption"
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
            chartName="_Transport freight demand"
            chartTitle="Transport Freight Demand"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="Mtkm"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarDiffChart
            chartName="_Transport Freight Consumption"
            chartTitle="Transport Freight Consumption"
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
            chartName="_Transport Navigation Consumpt"
            chartTitle="Transport Navigation Consumption"
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
            chartName="_Truck Stock"
            chartTitle="Truck Stock"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            selectedCountries={selectedCountries}
            combinedChart={false}
            label="k vehicles"
            minY={-1}
            maxY={1}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarDiffChart
            chartName="_Transport Trucks Consumption"
            chartTitle="Transport Trucks Consumption"
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
