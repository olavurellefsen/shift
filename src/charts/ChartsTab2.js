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
            chartName="Bio/Electro-fuels use"
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
            chartName="Biofuels import & domestic"
            chartTitle="Biofuels Import & Domestic"
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
            chartName="Transport CO2 emissions"
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
            chartName="Car stock"
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
            chartName="Aviation fuel consumption"
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
            chartName="Cars fuel consumption"
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
            chartName="Overall energy use"
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
            chartName="Freigth fuel consumption"
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
            chartName="Freight Demand"
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
            chartName="Inland fuel consumption"
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
            chartName="Maritime fuel consumption"
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
            chartName="Passenger Demand"
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
            chartName="Passenger fuel consumption"
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
            chartName="Truck fuel consumption"
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
          <StackedBarChart
            chartName="Truck stock"
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
        </Flex>
      )}
      {props.scenarioSelection.showDifference === true &&
        selectedScenario2 !== '' && (
          <Flex>
            <StackedBarDiffChart
              chartName="Bio/Electro-fuels use"
              chartTitle="Bio_Electro-fuels Consumption"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="PJ"
              minY={-55}
              maxY={55}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Biofuels import & domestic"
              chartTitle="Biofuels Import & Domestic"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="PJ"
              minY={-55}
              maxY={55}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Transport CO2 emissions"
              chartTitle="CO2 Emissions in Transport"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="kt"
              minY={-14493}
              maxY={14493}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Car stock"
              chartTitle="Car Stock"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="k vehicles"
              minY={-4203}
              maxY={4203}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Aviation fuel consumption"
              chartTitle="Transport Aviation Consumption"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="PJ"
              minY={-65}
              maxY={65}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Cars fuel consumption"
              chartTitle="Transport Cars Consumption"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="PJ"
              minY={-90}
              maxY={90}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Overall energy use"
              chartTitle="Transport Consumption"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="PJ"
              minY={-119}
              maxY={119}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Freigth fuel consumption"
              chartTitle="Transport Freight Consumption"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="PJ"
              minY={-63}
              maxY={63}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Freight Demand"
              chartTitle="Transport Freight Demand"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="Mtkm"
              minY={-316751}
              maxY={316751}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Inland fuel consumption"
              chartTitle="Transport Inland Consumption"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="PJ"
              minY={-108}
              maxY={108}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Maritime fuel consumption"
              chartTitle="Transport Navigation Consumption"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="PJ"
              minY={-48}
              maxY={48}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Passenger Demand"
              chartTitle="Transport Pass Demand"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="Mpkm"
              minY={-72260}
              maxY={72260}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Passenger fuel consumption"
              chartTitle="Transport Passenger Consumption"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="PJ"
              minY={-90}
              maxY={90}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Truck fuel consumption"
              chartTitle="Transport Trucks Consumption"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="PJ"
              minY={-46}
              maxY={46}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="Truck stock"
              chartTitle="Truck Stock"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              selectedCountries={selectedCountries}
              combinedChart={false}
              label="k vehicles"
              minY={-79}
              maxY={79}
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
